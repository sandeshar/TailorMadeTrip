import React from 'react';
import TaxonomyManager from "@/components/TaxonomyManager";
import * as actions from "@/actions/categories";

export default function CategoryAdminPage() {
    return (
        <TaxonomyManager
            title="Destinations & Categories"
            description="Manage and organize your travel categories and subcategories."
            actions={{
                getCategories: actions.getBlogCategories,
                createCategory: actions.createBlogCategory,
                updateCategory: actions.updateBlogCategory,
                deleteCategory: actions.deleteBlogCategory,
                getSubcategories: actions.getBlogSubcategories,
                createSubcategory: actions.createBlogSubcategory,
                updateSubcategory: actions.updateBlogSubcategory,
                deleteSubcategory: actions.deleteBlogSubcategory,
            }}
            enableSEO={true}
        />
    );
}
