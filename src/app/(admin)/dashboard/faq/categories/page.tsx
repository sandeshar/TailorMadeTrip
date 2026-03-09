"use client";

import TaxonomyManager from "../../_components/TaxonomyManager";
import {
    getFAQCategories,
    createFAQCategory,
    updateFAQCategory,
    deleteFAQCategory,
    getFAQSubcategories,
    createFAQSubcategory,
    updateFAQSubcategory,
    deleteFAQSubcategory
} from "@/actions/categories";

export default function FAQCategoryManager() {
    return (
        <TaxonomyManager
            title="FAQ Categories"
            description="Manage categories for your Frequently Asked Questions."
            actions={{
                getCategories: getFAQCategories,
                createCategory: createFAQCategory,
                updateCategory: updateFAQCategory,
                deleteCategory: deleteFAQCategory,
                getSubcategories: getFAQSubcategories,
                createSubcategory: createFAQSubcategory,
                updateSubcategory: updateFAQSubcategory,
                deleteSubcategory: deleteFAQSubcategory
            }}
            enableSEO={true}
        />
    );
}
