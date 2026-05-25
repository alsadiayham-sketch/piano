var DEFAULT_PRODUCTS = [];

var DEFAULT_DISCOUNTS = [];

var DEFAULT_SITE_SETTINGS = {
    whatsappNumber: '972569236758',
    heroSubtitle: 'شنط، شالات، مكياج وإكسسوارات ماركات أصلية',
    aboutText: 'اكسسوارات بيانو - وجهتك لأجمل الشنط والشالات والمكياج\n\nنوفر لكِ أفخم الماركات العالمية بجودة عالية وأسعار منافسة\nموقع المحل: القدس - الباب العامود\nخدمة توصيل لكل الخارطة',
    instagramLink: 'https://www.instagram.com/piano_accessories1__/',
    tiktokLink: ''
};

var BRANDS_DATA = [    { name: 'Gucci', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/200px-1960s_Gucci_Logo.svg.png' },
    { name: 'Dior', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/200px-Dior_Logo.svg.png' },
    { name: 'Louis Vuitton', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/200px-Louis_Vuitton_logo_and_wordmark.svg.png' },
    { name: 'Chanel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chanel_logo-no-words.svg/200px-Chanel_logo-no-words.svg.png' },
    { name: 'YSL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/YSL-Logo.svg/200px-YSL-Logo.svg.png' },
    { name: 'Guess', logo: '' },
    { name: 'Fendi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Fendi_logo.svg/200px-Fendi_logo.svg.png' },
    { name: 'Marc Jacobs', logo: '' }];

function normalizeSizeEntry(entry) {
    if (!entry) return { size: '????', unit: '????', price: 0 };
    var unit = entry.unit === 'g' ? 'g' : (entry.unit === '????' ? '????' : 'ml');
    return {
        size: String(entry.size || '????').trim() || '????',
        unit: unit,
        price: Number(entry.price) || 0
    };
}

function normalizeProduct(product) {
    var sizes = Array.isArray(product && product.sizes) && product.sizes.length
        ? product.sizes.map(normalizeSizeEntry)
        : [normalizeSizeEntry({ size: product && product.size, unit: product && product.unit, price: product && product.price })];

    return {
        id: Number(product && product.id) || Date.now(),
        name: (product && product.name) || '',
        brand: (product && product.brand) || '',
        category: (product && product.category) || '',
        sizes: sizes.filter(function (size) { return size.size && size.price >= 0; }),
        discount: Number(product && product.discount) || 0,
        image: (product && product.image) || '',
        status: (product && product.status) || 'normal'
    };
}

function normalizeProducts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeProduct).sort(function (a, b) { return a.id - b.id; });
}

function normalizeDiscount(discount) {
    var values = [];
    if (discount && discount.values && Array.isArray(discount.values)) {
        values = discount.values;
    } else if (discount && discount.value) {
        values = String(discount.value).split(',').map(function (v) { return v.trim(); }).filter(Boolean);
    }
    return {
        id: String(discount && discount.id ? discount.id : Date.now()),
        type: ['brand', 'category', 'manual', 'all'].indexOf(discount && discount.type) >= 0 ? discount.type : 'manual',
        value: values.join(', '),
        values: values,
        percentage: Number(discount && discount.percentage) || 0,
        description: String(discount && discount.description ? discount.description : '').trim(),
        expiresAt: discount && discount.expiresAt ? discount.expiresAt : ''
    };
}

function normalizeDiscounts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeDiscount);
}

function extractWhatsappNumber(input) {
    var raw = String(input || '').trim();
    if (!raw) return DEFAULT_SITE_SETTINGS.whatsappNumber;
    var fromLink = raw.indexOf('wa.me/') >= 0 ? raw.split('wa.me/')[1] : raw;
    return fromLink.replace(/[^\d]/g, '');
}

function buildWhatsAppUrl(number, message) {
    var safeNumber = extractWhatsappNumber(number);
    var text = message ? '?text=' + encodeURIComponent(message) : '';
    return 'https://wa.me/' + safeNumber + text;
}

function normalizeSettings(settings) {
    var source = settings || {};
    return {
        whatsappNumber: extractWhatsappNumber(source.whatsappNumber || source.whatsappLink || DEFAULT_SITE_SETTINGS.whatsappNumber),
        heroSubtitle: String(source.heroSubtitle || DEFAULT_SITE_SETTINGS.heroSubtitle),
        aboutText: String(source.aboutText || DEFAULT_SITE_SETTINGS.aboutText),
        instagramLink: String(source.instagramLink || DEFAULT_SITE_SETTINGS.instagramLink),
        tiktokLink: String(source.tiktokLink || DEFAULT_SITE_SETTINGS.tiktokLink)
    };
}

function getSizeData(product, sizeIdx) {
    if (!product || !Array.isArray(product.sizes) || !product.sizes.length) return { size: '????', unit: '????', price: 0 };
    var safeIndex = Math.max(0, Math.min(Number(sizeIdx) || 0, product.sizes.length - 1));
    return product.sizes[safeIndex];
}

function getUnitLabel(unit) {
    if (unit === 'g') return '????';
    if (unit === '????') return '';
    return '??';
}

function getSizeLabel(sizeData) {
    var label = getUnitLabel(sizeData.unit);
    if (!label) return String(sizeData.size);
    return String(sizeData.size) + ' ' + label;
}

function getProductDiscountPercent(product, discounts) {
    var discountPercent = Number(product && product.discount) || 0;
    var now = new Date().toISOString().slice(0, 10);
    normalizeDiscounts(discounts).forEach(function (discount) {
        if (discount.expiresAt && discount.expiresAt < now) return;
        if (discount.type === 'all') discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'brand' && discount.values.indexOf(product.brand) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'category' && discount.values.indexOf(product.category) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
    });
    return discountPercent;
}

function getFinalPrice(product, sizeIdx, discounts) {
    var sizeData = getSizeData(product, sizeIdx);
    var discountPercent = getProductDiscountPercent(product, discounts || []);
    if (discountPercent > 0) {
        return {
            original: Number(sizeData.price) || 0,
            final: Math.round((Number(sizeData.price) || 0) * (1 - discountPercent / 100)),
            hasDiscount: true,
            discountPercent: discountPercent
        };
    }

    return {
        original: Number(sizeData.price) || 0,
        final: Number(sizeData.price) || 0,
        hasDiscount: false,
        discountPercent: 0
    };
}

function normalizeCartItems(cartItems, productsList) {
    var safeProducts = Array.isArray(productsList) ? productsList : normalizeProducts(DEFAULT_PRODUCTS);
    return (Array.isArray(cartItems) ? cartItems : []).map(function (item) {
        var product = safeProducts.find(function (entry) { return entry.id === Number(item.id || item.productId); });
        var maxSizeIndex = product && product.sizes.length ? product.sizes.length - 1 : 0;
        var requestedSize = Number.isInteger(item.sizeIdx) ? item.sizeIdx : parseInt(item.sizeIdx || 0, 10) || 0;
        var sizeIdx = Math.max(0, Math.min(requestedSize, maxSizeIndex));
        return {
            id: Number(item.id || item.productId),
            sizeIdx: sizeIdx,
            qty: Math.max(1, parseInt(item.qty || 1, 10) || 1),
            price: Number(item.price) || (product ? getSizeData(product, sizeIdx).price : 0)
        };
    }).filter(function (item) {
        return item.id;
    });
}

function formatCurrency(value) {
    return '?' + (Number(value) || 0);
}

function formatDateTime(dateValue) {
    var date = dateValue instanceof Date ? dateValue : new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleString('ar-PS', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function makeOrderId() {
    var alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var code = '';
    for (var idx = 0; idx < 5; idx += 1) {
        code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return 'ORD-' + code;
}
