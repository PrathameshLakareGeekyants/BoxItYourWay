import { getComboData } from "@/app/actions/comboAction";
import ComboCard from "./ComboCard";

export default async function ComboPage() {
  const combos = await getComboData();

  const sanitizedPublicCombos =
    combos.publicCombos?.map((combo) => ({
      ...combo,
      totalPrice: combo.totalPrice === null ? undefined : combo.totalPrice,
      discountAmount:
        combo.discountAmount === null ? undefined : combo.discountAmount,
      perUnitPrice:
        combo.perUnitPrice === null ? undefined : combo.perUnitPrice,
      perUnitDiscount:
        combo.perUnitDiscount === null ? undefined : combo.perUnitDiscount,
    })) || [];

  const sanitizedUserCombos =
    combos.userCombos?.map((combo) => ({
      ...combo,
      totalPrice: combo.totalPrice === null ? undefined : combo.totalPrice,
      discountAmount:
        combo.discountAmount === null ? undefined : combo.discountAmount,
      perUnitPrice:
        combo.perUnitPrice === null ? undefined : combo.perUnitPrice,
      perUnitDiscount:
        combo.perUnitDiscount === null ? undefined : combo.perUnitDiscount,
    })) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Combo Gallery</h1>
      <p className="text-gray-600 text-center mb-8">
        Discover curated combos or manage your unique creations.
      </p>

      {/* Public combos */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Discover Combos</h2>
        {sanitizedPublicCombos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sanitizedPublicCombos.map((combo) => (
              <ComboCard key={combo.id} combo={combo} isPublic={true} />
            ))}
          </div>
        ) : (
          <div className="text-gray-400">No combos available.</div>
        )}
      </section>

      {/* My combos */}
      {sanitizedUserCombos.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-2">My Custom Combos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sanitizedUserCombos.map((combo) => (
              <ComboCard key={combo.id} combo={combo} isPublic={false} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
