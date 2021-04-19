const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
},
        get appetizers() {
            return this._courses.appetizers;
        },
        set appetizers(appetizers) {
            this._courses.appetizers = appetizers;
        },
        get mains() {
            return this._courses.mains;
        },
        set mains(mains) {
            this._courses.mains = mains;
        },
        get desserts() {
            return this._courses.desserts;
        },
    
        set desserts(desserts) {
            this._courses.desserts = desserts;
        },
        
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };   
        },

        addDishToCourse(courseName, dishName, dishPrice) {
            const dish = {
                name: dishName,
                price: dishPrice,
            }
            return this._courses[courseName].push(dish);
        },

        getRandomDishFromCourse(courseName) {
            const dishes = this._courses[courseName];
            const randomIndex = Math.floor(Math.random() * dishes.length);
            return dishes[randomIndex];
        },

        generateRandomMeal() {
            const appetizer = this.getRandomDishFromCourse('appetizers');
            const main = this.getRandomDishFromCourse('mains');
            const dessert = this.getRandomDishFromCourse('desserts');
            const totalPrice = appetizer.price + main.price + dessert.price;
            return `Your order is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`
        },
    };
    menu.addDishToCourse('appetizers', 'onion rings', 13.0);
    menu.addDishToCourse('mains', 'steak', 5.0);
    menu.addDishToCourse('desserts', 'macarons', 6.50);

    menu.addDishToCourse('appetizers', 'bruschette', 2.0);
    menu.addDishToCourse('mains', 'soup', 4.50);
    menu.addDishToCourse('desserts', 'cheesecake', 3.0);

    const meal = menu.generateRandomMeal();
    console.log(meal);

