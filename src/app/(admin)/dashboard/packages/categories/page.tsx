"use client";

import TaxonomyManager from "../../_components/TaxonomyManager";
import {
    getPackageCategories,
    createPackageCategory,
    updatePackageCategory,
    deletePackageCategory,
    getPackageSubcategories,
    createPackageSubcategory,
    updatePackageSubcategory,
    deletePackageSubcategory
} from "@/actions/categories";

export default function PackageTaxonomy() {
    return (
        <TaxonomyManager
            title="Package Taxonomy"
            description="Manage categories and subcategories for the Packages."
            actions={{
                getCategories: getPackageCategories,
                createCategory: createPackageCategory,
                updateCategory: updatePackageCategory,
                deleteCategory: deletePackageCategory,
                getSubcategories: getPackageSubcategories,
                createSubcategory: createPackageSubcategory,
                updateSubcategory: updatePackageSubcategory,
                deleteSubcategory: deletePackageSubcategory
            }}
            enableSEO={true}
        />
    );
}
