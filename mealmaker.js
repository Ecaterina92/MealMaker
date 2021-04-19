const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
},
        get appetizers() {
            return this._courses.appetizers;
        },
        set appetizers(appetizer) {
            this._courses.appetizers = appetizer;
        },
        get mains() {
            return this._courses.mains;
        },
        set mains(main) {
            this._courses.mains = main;
        },
        get desserts() {
            return this._courses.desserts;
        },
    
        set desserts(dessert) {
            this._courses.desserts = dessert;
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
                dish: dishName,
                price: dishPrice
            }
            this._courses[courseName] = dish;
        },

        getRandomDishFromCourse(courseName) {
            const dishes = this[courseName];
            const randomIndex = Math.floor(Math.random() * dishes.length);
            return dishes[randomIndex];
        },

        generateRandomMeal() {
            let appetizer = this.getRandomDishFromCourse('appetizers');
            let main = this.getRandomDishFromCourse('mains');
            let dessert = this.getRandomDishFromCourse('desserts');
            const totalPrice = this.appetizers.price + this.mains.price + this.desserts.price;
            return `Your meal is ${this.appetizers}, ${this.mains}, ${this.desserts}. The price is ${totalPrice}.`
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

