import Category from "../../database/models/categoriesModel";

class CategoryController {
    async RegisterCategory(body: any) {
        try {
            console.log('body: ', body);
            const registeredCategory = await Category.create({
                name: body.name,
                description: body.description,
                parent_category_id: body.parent_category_id,
                created_at: new Date()
            });
            console.log('registeredCategory: ', registeredCategory);
            return registeredCategory;
        } catch (error) {
            console.log("🚀 ~ UserService ~ RegisterCategory ~ error:", error);
        }
    }

    async getAllCategories() {
        try {
            const categories = await Category.findAll(
                {attributes  : ['id','name','description','parent_category_id']}
            );
            return categories;
        } catch (error) {
            console.log("🚀 ~ UserService ~ getAllCategories ~ error:", error);
            throw error; // Re-throw the error to handle it further up the call stack if necessary
        }
    }
    }

export default new CategoryController()