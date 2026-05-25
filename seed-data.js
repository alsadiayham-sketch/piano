var SEED_PRODUCTS = [
    { id: 1, name: 'شنطة كروس بودي', brand: 'Gucci', category: 'شنط', sizes: [{size: 'صغير', unit: 'قطعة', price: 280}], image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 2, name: 'شنطة يد كلاسيكية', brand: 'Chanel', category: 'شنط', sizes: [{size: 'وسط', unit: 'قطعة', price: 350}], image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop', status: 'special' },
    { id: 3, name: 'شنطة كتف جلد', brand: 'Louis Vuitton', category: 'شنط', sizes: [{size: 'وسط', unit: 'قطعة', price: 320}], image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 4, name: 'شنطة سهرة', brand: 'Dior', category: 'شنط', sizes: [{size: 'صغير', unit: 'قطعة', price: 300}], image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop', status: 'special' },
    { id: 5, name: 'شنطة ظهر أنيقة', brand: 'Fendi', category: 'شنط', sizes: [{size: 'وسط', unit: 'قطعة', price: 290}], image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&h=400&fit=crop', status: 'normal' },
    { id: 6, name: 'جزدان جلد طبيعي', brand: 'Gucci', category: 'جزادين', sizes: [{size: 'واحد', unit: 'قطعة', price: 150}], image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 7, name: 'جزدان كلاسيكي', brand: 'Louis Vuitton', category: 'جزادين', sizes: [{size: 'واحد', unit: 'قطعة', price: 180}], image: 'https://images.unsplash.com/photo-1606503153255-59d5a90e39be?w=400&h=400&fit=crop', status: 'normal' },
    { id: 8, name: 'جزدان صغير', brand: 'Chanel', category: 'جزادين', sizes: [{size: 'صغير', unit: 'قطعة', price: 120}], image: 'https://images.unsplash.com/photo-1612902456551-404b9a18e81e?w=400&h=400&fit=crop', status: 'normal' },
    { id: 9, name: 'شال حرير معرق', brand: 'Dior', category: 'شالات', sizes: [{size: 'واحد', unit: 'قطعة', price: 200}], image: 'https://images.unsplash.com/photo-1601924921557-45e8e0e6528a?w=400&h=400&fit=crop', status: 'special' },
    { id: 10, name: 'شال صوف فاخر', brand: 'Gucci', category: 'شالات', sizes: [{size: 'واحد', unit: 'قطعة', price: 220}], image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 11, name: 'شال كشمير', brand: 'Louis Vuitton', category: 'شالات', sizes: [{size: 'واحد', unit: 'قطعة', price: 250}], image: 'https://images.unsplash.com/photo-1457545195570-67f207084966?w=400&h=400&fit=crop', status: 'normal' },
    { id: 12, name: 'شال مطرز ذهبي', brand: 'Fendi', category: 'شالات', sizes: [{size: 'واحد', unit: 'قطعة', price: 190}], image: 'https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=400&fit=crop', status: 'normal' },
    { id: 13, name: 'طقم مكياج كامل', brand: 'Dior', category: 'مكياج', sizes: [{size: 'واحد', unit: 'قطعة', price: 280}], image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop', status: 'special' },
    { id: 14, name: 'روج مات', brand: 'YSL', category: 'مكياج', sizes: [{size: 'واحد', unit: 'قطعة', price: 85}], image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 15, name: 'بودرة أساس', brand: 'Chanel', category: 'مكياج', sizes: [{size: 'واحد', unit: 'قطعة', price: 120}], image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop', status: 'normal' },
    { id: 16, name: 'ماسكارا مكثفة', brand: 'Marc Jacobs', category: 'مكياج', sizes: [{size: 'واحد', unit: 'قطعة', price: 75}], image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f69?w=400&h=400&fit=crop', status: 'normal' },
    { id: 17, name: 'عطر نسائي فاخر', brand: 'Dior', category: 'عطور', sizes: [{size: '50ml', unit: 'ml', price: 180}, {size: '100ml', unit: 'ml', price: 280}], image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 18, name: 'عطر مسك وعود', brand: 'YSL', category: 'عطور', sizes: [{size: '50ml', unit: 'ml', price: 160}, {size: '100ml', unit: 'ml', price: 250}], image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop', status: 'special' },
    { id: 19, name: 'نظارة شمسية', brand: 'Gucci', category: 'اكسسوارات', sizes: [{size: 'واحد', unit: 'قطعة', price: 200}], image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop', status: 'normal' },
    { id: 20, name: 'حزام جلد', brand: 'Gucci', category: 'اكسسوارات', sizes: [{size: 'واحد', unit: 'قطعة', price: 150}], image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 21, name: 'بابوج شتوي فرو', brand: 'Guess', category: 'أحذية', sizes: [{size: '37', unit: 'قطعة', price: 180}, {size: '38', unit: 'قطعة', price: 180}, {size: '39', unit: 'قطعة', price: 180}, {size: '40', unit: 'قطعة', price: 180}], image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop', status: 'special' },
    { id: 22, name: 'ساعة يد ذهبية', brand: 'Guess', category: 'اكسسوارات', sizes: [{size: 'واحد', unit: 'قطعة', price: 250}], image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 23, name: 'شنطة سفر', brand: 'Louis Vuitton', category: 'شنط', sizes: [{size: 'كبير', unit: 'قطعة', price: 450}], image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', status: 'normal' },
    { id: 24, name: 'طقم اكسسوارات', brand: 'Dior', category: 'اكسسوارات', sizes: [{size: 'واحد', unit: 'قطعة', price: 180}], image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', status: 'normal' }
];

function seedFirestoreData(forceOverwrite) {
    if (!window.db) {
        console.error('Firebase not initialized');
        return Promise.reject('No db');
    }

    return db.collection('products').get().then(function(snapshot) {
        if (snapshot.size > 0 && !forceOverwrite) {
            console.log('Products already exist (' + snapshot.size + '). Use seedFirestoreData(true) to overwrite.');
            return;
        }

        var batch = window.rawDb.batch();

        // Delete existing
        snapshot.docs.forEach(function(doc) {
            batch.delete(doc.ref);
        });

        // Add new products
        SEED_PRODUCTS.forEach(function(product) {
            var docRef = db.collection('products').doc('product_' + product.id);
            batch.set(docRef, product);
        });

        return batch.commit().then(function() {
            console.log('Seeded ' + SEED_PRODUCTS.length + ' products successfully!');
        });
    });
}

window.seedFirestoreData = seedFirestoreData;
