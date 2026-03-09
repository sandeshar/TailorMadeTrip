"use client";

import TaxonomyManager from "../../_components/TaxonomyManager";
import {
    getDestinationCategories,
    createDestinationCategory,
    updateDestinationCategory,
    deleteDestinationCategory,
    getDestinationSubcategories,
    createDestinationSubcategory,
    updateDestinationSubcategory,
    deleteDestinationSubcategory
} from "@/actions/categories";

export default function DestinationTaxonomyManager() {
    return (
        <TaxonomyManager
            title="Destination Category Manager"
            description="Manage your geographical regions (categories) and specific locations (subcategories)."
            actions={{
                getCategories: getDestinationCategories,
                createCategory: createDestinationCategory,
                updateCategory: updateDestinationCategory,
                deleteCategory: deleteDestinationCategory,
                getSubcategories: getDestinationSubcategories,
                createSubcategory: createDestinationSubcategory,
                updateSubcategory: updateDestinationSubcategory,
                deleteSubcategory: deleteDestinationSubcategory
            }}
            enableSEO={true}
        />
    );
}

