const products = {
    "micro-9000": {
        title: "Micro 9000 Velvet",
        image: "assets/velvet_micro_9000.jpg",
        description: "The industry standard for softness and durability. Micro 9000 Velvet is our premium range fabric, known for its rich texture and superior fall. Perfect for ethnic wear, high-fashion garments, and luxurious upholstery.",
        features: [
            "Super soft hand feel & Rich vibrant colors",
            "Durable and long-lasting quality",
            "Excellent drape and fall for garments",
            "Wrinkle-resistant fabric",
            "Available in a wide range of shades"
        ],
        specs: {
            "Material": "100% Polyester",
            "Quality": "9000 Micro",
            "Width": "44\" / 58\"",
            "Pattern": "Plain / Solid",
            "Technics": "Woven",
            "Usage": "Garments, Suits, Sherwanis, Upholstery",
            "Yarn Count": "90D/72F"
        }
    },
    "micro-5000": {
        title: "Micro 5000 Velvet",
        image: "assets/velvet_micro_5000.jpg",
        imageFilter: "hue-rotate(45deg)", 
        description: "A versatile choice offering a balance of quality and affordability. Micro 5000 provides the classic velvet look with a slightly lighter weight, making it ideal for cost-effective fashion and crafting.",
        features: [
            "Affordable luxury",
            "Smooth texture",
            "Lightweight and breathable",
            "Great for costumes and crafts",
            "Easy to maintain"
        ],
        specs: {
            "Material": "100% Polyester",
            "Quality": "5000 Micro",
            "Width": "44\" / 58\"",
            "Pattern": "Plain",
            "Technics": "Woven",
            "Usage": "Costumes, Crafts, linings, Budget Garments"
        }
    },
    "micro-9000-hd": {
        title: "Micro 9000 HD Velvet",
        image: "assets/velvet_micro_9000_hd.jpg",
        imageFilter: "brightness(0.8) contrast(1.2)",
        description: "High Density (HD) Micro 9000 Velvet offers an even denser pile for superior plushness and depth of color. This is the ultimate choice for heavy-duty upholstery and royal garments.",
        features: [
            "Extra dense pile for premium feel",
            "Deep, intense colors",
            "Higher abrasion resistance",
            "Luxurious heavy drape",
            "Perfect for high-traffic upholstery"
        ],
        specs: {
            "Material": "100% Polyester",
            "Quality": "9000 HD",
            "Width": "54\" / 58\"",
            "Weight": "Heavy",
            "Technics": "Woven Pile",
            "Usage": "Luxury Upholstery, Heavy Curtains, Royal Garments"
        }
    },
    "two-tone": {
        title: "Two Tone Velvet",
        image: "assets/velvet_two_tone.jpg",
        description: "Exquisite dual-tone finish that changes with light and angle. This fabric creates a dynamic visual effect, adding depth and sophistication to any design.",
        features: [
            "Dynamic color shift effect",
            "Unique visual texture",
            "Modern and trendy look",
            "Soft to the touch",
            "Ideal for statement pieces"
        ],
        specs: {
            "Material": "Polyester Blend",
            "Pattern": "Two Tone / Shot",
            "Width": "58\"",
            "Technics": "Woven",
            "Usage": "Party Wear, Modern Upholstery, Cushions"
        }
    },
    "brasso": {
        title: "Brasso Velvet",
        image: "assets/velvet_brasso.jpg",
        imageFilter: "hue-rotate(90deg) contrast(1.2)",
        description: "Intricate patterns burnt out on velvet, creating a semi-transparent, textured masterpiece. Brasso velvet combines the opacity of pile with the sheerness of the base fabric.",
        features: [
            "Artistic burnout patterns",
            "Semi-transparent elegance",
            "Textured feel",
            "Lightweight and decorative",
            "Available in floral and geometric designs"
        ],
        specs: {
            "Material": "Polyester / Viscose Blend",
            "Pattern": "Burnout / Brasso",
            "Width": "44\" / 54\"",
            "Technics": "Chemical Burnout",
            "Usage": "Sarees, Dupattas, Overlay Dresses, Curtains"
        }
    },
    "viscose": {
        title: "Viscose Velvet",
        image: "assets/velvet_viscose.jpg",
        imageFilter: "sepia(0.3) saturate(1.5)",
        description: "Made from regenerated cellulose fiber, Viscose Velvet offers a silk-like sheen and varying drape. It is highly dyeable, resulting in brilliant, deep colors.",
        features: [
            "Silk-like luster and sheen",
            "Extremely soft and fluid drape",
            "Breathable natural-feel",
            "High dye affinity for rich colors",
            "Premium finish"
        ],
        specs: {
            "Material": "100% Viscose Pile",
            "Width": "44\" / 54\"",
            "Pattern": "Plain",
            "Technics": "Woven",
            "Usage": "Evening Gowns, Scarves, High-end Fashion"
        }
    },
    "cotton": {
        title: "Cotton Velvet",
        image: "assets/velvet_cotton.jpg",
        imageFilter: "grayscale(0.2)",
        description: "100% natural comfort with the plush feel of velvet. Cotton velvet is breathable, absorbent, and has a more matte, understated elegance compared to synthetic velvets.",
        features: [
            "100% Natural fiber",
            "Breathable and skin-friendly",
            "Matte finish (less shiny)",
            "Durable and comfortable",
            "Eco-friendly choice"
        ],
        specs: {
            "Material": "100% Cotton",
            "Width": "44\" / 58\"",
            "Weight": "Medium to Heavy",
            "Pattern": "Plain",
            "Usage": "Suits, Blazers, Upholstery, Drapery"
        }
    },
    "polyester": {
        title: "Polyester Velvet",
        image: "assets/velvet_polyester.jpg",
        imageFilter: "brightness(1.1)",
        description: "Highly durable and stain-resistant, standard Polyester Velvet is the workhorse of the industry. It retains its shape and color over time better than natural fibers.",
        features: [
            "High durability",
            "Stain and fade resistant",
            "Easy to clean",
            "Cost-effective",
            "Retains shape well"
        ],
        specs: {
            "Material": "100% Polyester",
            "Width": "58\"",
            "Pattern": "Plain / Knitted or Woven",
            "Technics": "Woven/Knitted",
            "Usage": "Commercial Upholstery, Curtains, Event Decor"
        }
    }
};

function getProductData(id) {
    return products[id];
}
