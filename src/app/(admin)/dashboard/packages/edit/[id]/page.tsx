import PackageForm from "../../_components/PackageForm";

export default async function EditPackagePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    return <PackageForm params={resolvedParams} />;
}