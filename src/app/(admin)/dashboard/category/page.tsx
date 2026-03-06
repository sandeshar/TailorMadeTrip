import React from 'react';
import TaxonomyManager from "@/components/TaxonomyManager";
import * as actions from "@/actions/categories";

export default function CategoryAdminPage() {
    return (
        <TaxonomyManager
            title="Destinations & Categories"
            description="Manage and organize your travel categories and subcategories."
            actions={{
                getCategories: actions.getCategories,
                createCategory: actions.createCategory,
                updateCategory: actions.updateCategory,
                deleteCategory: actions.deleteCategory,
                getSubcategories: actions.getSubcategories,
                createSubcategory: actions.createSubcategory,
                updateSubcategory: actions.updateSubcategory,
                deleteSubcategory: actions.deleteSubcategory,
            }}
            enableSEO={true}
        />
    );
}
