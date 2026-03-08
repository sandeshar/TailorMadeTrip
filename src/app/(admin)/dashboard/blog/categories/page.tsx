"use client";

import TaxonomyManager from "../../_components/TaxonomyManager";
import {
    getBlogCategories,
    createBlogCategory,
    updateBlogCategory,
    deleteBlogCategory,
    getBlogSubcategories,
    createBlogSubcategory,
    updateBlogSubcategory,
    deleteBlogSubcategory
} from "@/actions/categories";

export default function LearningHubTaxonomy() {
    return (
        <TaxonomyManager
            title="Blog Taxonomy"
            description="Manage categories and subcategories for the Blog articles."
            actions={{
                getCategories: getBlogCategories,
                createCategory: createBlogCategory,
                updateCategory: updateBlogCategory,
                deleteCategory: deleteBlogCategory,
                getSubcategories: getBlogSubcategories,
                createSubcategory: createBlogSubcategory,
                updateSubcategory: updateBlogSubcategory,
                deleteSubcategory: deleteBlogSubcategory
            }}
            enableSEO={true}
        />
    );
}


