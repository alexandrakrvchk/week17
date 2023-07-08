class Transport {
    constructor(id, type, brand, doors, price, image) {
        this.id = id;
        this.type = type;
        this.brand = brand;
        this.doors = doors;
        this.price = price;
        this.image = image;

    }
    
    getInfo() {
        return {
            type: this.type,
            brand: this.brand,
        }
    }

    getPrice() {
        return {
            price: this.price,
        }
    }
}

class Car extends Transport {
    getDoorsCount() {

    }
}

class Bike extends Transport {
    getMaxSpeed() {

    }
}


let data1 = new Transport ({
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
})

let data2 = new Transport ({
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
})

let data3 = new Transport ({
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
})

let data4 = new Transport ({
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
})



console.log(data1.getPrice());
