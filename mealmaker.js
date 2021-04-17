const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        get desserts() {
            return this._desserts;
        },
    
        set appetizers(appetizers) {
            this._appetizers = appetizers;
        },
        set mains(mains) {
            this._mains = mains;
        },
        set desserts(desserts) {
            this.desserts = desserts;
        },
    },
    
    get _courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };   
        },

        addDishToCourse(courseName, dishName, dishPrice) {
            const dish = {
                name: dishName,
                price: dishPrice
            };
            this._courses[courseName].push(dish);
        },

        getRandomDishFromCourse(courseName) {
            const dishes = this.menu._courses[CourseName];
            const randomIndex = Math.floor(Math.random() * dishes.length);
            return dishes[randomIndex];
        },

        generateRandomMeal() {
            let appetizer = this.getRandomDishFromCourse('appetizers');
            let main = this.getRandomDishFromCourse('mains');
            let dessert = this.getRandomDishFromCourse('desserts');
            const totalPrice = appetizer.price + main.price + dessert.price;
            return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`
        },
    };
    menu.addDishToCourse('appetizers', 'Onion Rings');
    menu.addDishToCourse('mains', 'Steak');
    menu.addDishToCourse('desserts', 'Macarons');

    const meal = menu.generateRandomMeal();
    console.log(meal);

