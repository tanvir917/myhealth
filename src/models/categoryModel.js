const { construct } = require("core-js/fn/reflect")

class CategoryDoctors{

    constructor(id,Name, image){
        this.id=id;
        this.Name=Name;
        this.image = image;
    }
}
export default CategoryDoctors;