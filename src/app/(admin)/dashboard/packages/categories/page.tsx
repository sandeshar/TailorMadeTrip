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

export default function PackageTaxonomyManager() {
    return (
        <TaxonomyManager
            title="Package Category Manager"
            description="Manage your Package levels (categories) and specific batches or specializations (subcategories)."
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

