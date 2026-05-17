import { ProductFeatureConfigurator } from "./ProductFeatureConfigurator";

/**
 * LaptopBuilderExample
 *
 * A stacked, three-group product builder for a custom laptop.
 * Groups: processor (radio), storage (select), add-ons (checkbox).
 * Demonstrates basePrice delta pricing and the onConfigChange callback.
 */
export function LaptopBuilderExample() {
  return (
    <ProductFeatureConfigurator
      title="Build your laptop"
      description="Choose your options and see the price update as you go."
      basePrice={999}
      currency="USD"
      layout="stacked"
      groups={[
        {
          name: "processor",
          label: "Processor",
          description: "Pick the chip that fits your workload.",
          type: "radio",
          required: true,
          options: [
            {
              value: "i5",
              label: "Core i5",
              description: "Everyday web, email, and documents.",
              price: 0,
            },
            {
              value: "i7",
              label: "Core i7",
              description: "Heavy multitasking and video editing.",
              price: 200,
            },
            {
              value: "i9",
              label: "Core i9",
              description: "Professional rendering and compiling.",
              price: 450,
            },
          ],
        },
        {
          name: "storage",
          label: "Storage",
          description: "All options are fast NVMe SSDs.",
          type: "select",
          required: true,
          options: [
            { value: "256gb", label: "256 GB SSD", price: 0 },
            { value: "512gb", label: "512 GB SSD", price: 100 },
            { value: "1tb",   label: "1 TB SSD",   price: 200 },
            { value: "2tb",   label: "2 TB SSD",   price: 380 },
          ],
        },
        {
          name: "addons",
          label: "Add-ons",
          description: "Optional extras included at checkout.",
          type: "checkbox",
          options: [
            {
              value: "warranty",
              label: "3-year extended warranty",
              description: "Extends standard 1-year coverage to 3 years.",
              price: 149,
            },
            {
              value: "office",
              label: "Productivity suite license",
              description: "Full license for word processing, spreadsheets, and slides.",
              price: 99,
            },
            {
              value: "bag",
              label: "Premium carry sleeve",
              description: "Water-resistant neoprene sleeve for 15\" laptops.",
              price: 49,
            },
          ],
        },
      ]}
      finalCta={{ label: "Order now", href: "/checkout" }}
      onConfigChange={(selections, total) => {
        // Replace with your own tracking or state update.
        console.log("Config changed:", selections, "Total:", total);
      }}
    />
  );
}

/**
 * CameraKitBuilderExample
 *
 * A side-by-side layout with showPreview enabled, demonstrating the image
 * preview feature. Groups: body (radio with imageSrc), lens (radio with imageSrc),
 * accessories (checkbox). The preview panel updates as the user selects options.
 */
export function CameraKitBuilderExample() {
  return (
    <ProductFeatureConfigurator
      title="Configure your camera kit"
      description="Select your body, lens, and accessories. The preview updates with each choice."
      basePrice={1299}
      currency="USD"
      layout="side-by-side"
      showPreview={true}
      groups={[
        {
          name: "body",
          label: "Camera body",
          description: "All bodies include a battery, charger, and strap.",
          type: "radio",
          required: true,
          options: [
            {
              value: "entry",
              label: "Entry mirrorless",
              description: "24 MP, 4K video, weather-sealed body.",
              price: 0,
              imageSrc: "/images/camera-entry.jpg",
            },
            {
              value: "pro",
              label: "Pro mirrorless",
              description: "45 MP, 8K video, dual card slots, pro weather sealing.",
              price: 800,
              imageSrc: "/images/camera-pro.jpg",
            },
          ],
        },
        {
          name: "lens",
          label: "Lens",
          description: "Lenses are compatible with both bodies via the included adapter.",
          type: "radio",
          required: true,
          options: [
            {
              value: "kit",
              label: "18-55 mm kit lens",
              description: "Versatile zoom for everyday shooting.",
              price: 0,
              imageSrc: "/images/lens-kit.jpg",
            },
            {
              value: "portrait",
              label: "85 mm portrait prime",
              description: "f/1.4 aperture for subject isolation.",
              price: 350,
              imageSrc: "/images/lens-portrait.jpg",
            },
            {
              value: "tele",
              label: "70-200 mm telephoto",
              description: "f/2.8 zoom for sports and wildlife.",
              price: 900,
              imageSrc: "/images/lens-tele.jpg",
            },
          ],
        },
        {
          name: "accessories",
          label: "Accessories",
          description: "Add items to your kit.",
          type: "checkbox",
          options: [
            {
              value: "extra-battery",
              label: "Extra battery",
              description: "Identical OEM battery for the selected body.",
              price: 79,
            },
            {
              value: "filters",
              label: "ND filter set (3-pack)",
              description: "2-stop, 4-stop, and 6-stop neutral density filters.",
              price: 129,
            },
            {
              value: "bag",
              label: "Camera backpack",
              description: "Fits body, two lenses, and a 15\" laptop.",
              price: 189,
            },
          ],
        },
      ]}
      finalCta={{ label: "Add to cart", href: "/cart/add" }}
      onConfigChange={(selections, total) => {
        console.log("Camera kit changed:", selections, "Total:", total);
      }}
    />
  );
}
