export type Faq = { question: string; answer: string };
export type ServiceStep = { title: string; description: string };
export type Service = { slug: string; navLabel: string; h1: string; metaTitle: string; metaDescription: string; heroSubhead: string; intro: string[]; subServices?: { title: string; description: string }[]; benefits: { title: string; description: string }[]; process: ServiceStep[]; faqs: Faq[]; related: string[]; heroImage: { src: string; alt: string; isPlaceholder?: boolean } };
import { site } from "./site";

export const services: Service[] = [
  {
    "slug": "door-and-window-installation",
    "navLabel": "Door and Window Installation",
    "h1": "Door and Window Installation in Maryland",
    "metaTitle": "Window & Door Installation in Maryland | KrasPro LLC",
    "metaDescription": "Licensed Maryland contractor for window, door and basement window installation. Photo-backed assessments and itemized quotes. Get a free estimate.",
    "heroSubhead": "Replacement windows, entry doors, patio doors and basement windows, installed square, sealed and finished cleanly.",
    "intro": [
      "Windows and exterior doors shape how your home feels every day. A draft near a favorite chair, a door that sticks, or moisture around a frame can point to an opening that needs attention. We look at the window or door together with the surrounding trim and wall, because a new product alone cannot correct every problem. Replacement windows, entry and storm doors, and patio or sliding doors each call for careful measurements and a plan for flashing and sealing. The right choice depends on the condition of the existing frame, how you use the opening, and the look you want for your home. When an existing unit can reasonably be repaired, it is worth discussing that option before deciding on replacement. You can ask questions about materials, operation, finish details, and what the work will involve.",
      "Basement windows deserve the same attention as the windows upstairs, whether you are replacing a unit in an existing opening or planning a new opening. Options can include glass block, a window well, or an egress window for a finished space. Cutting a new opening and excavating for a well involve different work from a like-for-like replacement, so the condition and layout of the property matter. Requirements and permits vary by county, and the local permitting office should confirm what applies before cutting begins. We measure the opening, discuss product choices, and explain the planned installation, including flashing, sealing, trim, and cleanup. A written quote helps you understand the proposed scope before you decide. At the end, a walkthrough gives you a chance to review the operation and finish and ask about care."
    ],
    "subServices": [
      {
        "title": "Replacement windows",
        "description": "Replacement windows."
      },
      {
        "title": "Entry and storm doors",
        "description": "Entry and storm doors."
      },
      {
        "title": "Patio and sliding doors",
        "description": "Patio and sliding doors."
      },
      {
        "title": "Basement window installation (replacement in existing openings, new openings, egress windows and wells, glass block)",
        "description": "Basement window installation (replacement in existing openings, new openings, egress windows and wells, glass block)."
      }
    ],
    "benefits": [
      {
        "title": "better comfort and lower drafts",
        "description": "better comfort and lower drafts."
      },
      {
        "title": "improved security and curb appeal",
        "description": "improved security and curb appeal."
      },
      {
        "title": "proper flashing and sealing to prevent water intrusion",
        "description": "proper flashing and sealing to prevent water intrusion."
      },
      {
        "title": "safe egress for finished basements",
        "description": "safe egress for finished basements."
      },
      {
        "title": "clean installation with trim and caulk finished",
        "description": "clean installation with trim and caulk finished."
      }
    ],
    "process": [
      {
        "title": "Measure and assess openings",
        "description": "Measure and assess openings."
      },
      {
        "title": "Choose products and see the itemized quote",
        "description": "Choose products and see the itemized quote."
      },
      {
        "title": "Remove, install, flash and seal",
        "description": "Remove, install, flash and seal."
      },
      {
        "title": "Trim, caulk, clean up and final walkthrough",
        "description": "Trim, caulk, clean up and final walkthrough."
      }
    ],
    "faqs": [
      {
        "question": "How much does basement window installation cost in Maryland?",
        "answer": `The cost depends on the window size and type, and mainly on whether we are replacing a window in an existing opening or cutting a new one. Egress windows with a window well involve excavation and cost more than a like-for-like replacement. ${site.trust.photoEvidence ? "After we see photos or visit your home" : "After we visit your home"}, you get a written${site.trust.itemizedQuotes ? ", itemized" : ""} quote with no surprises.`
      },
      {
        "question": "Do I need an egress window in my basement?",
        "answer": "If you are finishing a basement as a bedroom or other habitable space, building codes generally require an emergency escape opening of a minimum size. Requirements and permits vary by county, so we confirm them with your local permitting office before cutting anything."
      },
      {
        "question": "How long does it take to replace windows in a typical house?",
        "answer": "Replacing a single window or door is often done in a few hours. A whole-house window replacement is commonly completed in a few days, depending on the number of windows and any repairs the openings need. We give you a realistic schedule in your quote."
      },
      {
        "question": "Should I repair or replace my windows and exterior doors?",
        "answer": "If the frames are sound, repair or reglazing can be the more cost-effective choice. Replacement makes sense when frames are rotted, seals have failed (fogging between panes), or drafts and water leaks continue after repair. We tell you which option fits and do not push replacement when repair will do."
      }
    ],
    "related": [
      "exterior-painting",
      "decks-siding-fence",
      "roofing-gutters-shutters"
    ],
    "heroImage": {
      "src": "/images/services/placeholder.svg",
      "alt": "Placeholder for Door and Window Installation",
      "isPlaceholder": true
    }
  },
  {
    "slug": "exterior-painting",
    "navLabel": "Exterior Painting",
    "h1": "Exterior Painting in Maryland",
    "metaTitle": "Exterior Painting in Maryland | KrasPro LLC",
    "metaDescription": "Exterior house, barn, vinyl siding and metal roof painting in Maryland. Lead-safe prep, power washing, stripping and window reglazing. Free estimates.",
    "heroSubhead": "Exterior house, barn, vinyl siding and metal roof painting in Maryland. Lead-safe prep, power washing, stripping and window reglazing. Free estimates.",
    "intro": [
      "A lasting exterior paint job starts with the condition of the surface underneath. Peeling paint, exposed wood, rust, and failed caulk need different preparation, and covering them without addressing the cause can shorten the life of a new finish. We assess houses, barns, metal roofs and chimneys, and vinyl siding to understand what each surface needs. Depending on the condition, preparation may involve washing, scraping, stripping loose or failing coatings, repairs, priming, and caulking. Sound existing paint does not always need to be removed completely. We discuss the work needed to reach a suitable surface before finish coats go on, so you can understand the scope rather than guess what is included. Product and color choices should suit the material and exposure, including the effects of Maryland weather.",
      "Older surfaces can raise additional questions. Homes built before 1978 may contain lead-based paint, and disturbing it can require certified contractors and specific work practices. Ask for the applicable certification before work begins and confirm any additional requirements for your property. Window reglazing can be part of a broader plan to maintain existing windows, while metal roofs and chimneys may need rust treatment and a suitable primer. Vinyl siding needs a coating formulated for vinyl and an appropriate color to limit heat-related distortion. We discuss access, protection of surrounding areas, and the preparation each part of your project needs before the work starts. Once the surfaces are prepared and the finish is applied, a final walkthrough is an opportunity to review the result, discuss care, and identify any questions about the completed work."
    ],
    "subServices": [
      {
        "title": "Houses",
        "description": "Houses."
      },
      {
        "title": "Barns",
        "description": "Barns."
      },
      {
        "title": "Metal roofs and chimneys",
        "description": "Metal roofs and chimneys."
      },
      {
        "title": "Vinyl siding painting",
        "description": "Vinyl siding painting."
      },
      {
        "title": "Power wash and prep painting",
        "description": "Power wash and prep painting."
      },
      {
        "title": "Stripping all paints",
        "description": "Stripping all paints."
      },
      {
        "title": "Window reglazing",
        "description": "Window reglazing."
      },
      {
        "title": "Lead paint removal",
        "description": "Lead paint removal."
      }
    ],
    "benefits": [
      {
        "title": "prep-first approach so paint lasts",
        "description": "prep-first approach so paint lasts."
      },
      {
        "title": "protection from Maryland humidity and freeze-thaw cycles",
        "description": "protection from Maryland humidity and freeze-thaw cycles."
      },
      {
        "title": "stronger curb appeal and home value",
        "description": "stronger curb appeal and home value."
      },
      {
        "title": "lead-safe practices on older homes",
        "description": "lead-safe practices on older homes."
      },
      {
        "title": "tidy, protected job site",
        "description": "tidy, protected job site."
      }
    ],
    "process": [
      {
        "title": "Inspect and document surfaces",
        "description": "Inspect and document surfaces."
      },
      {
        "title": "Wash, scrape, strip and repair",
        "description": "Wash, scrape, strip and repair."
      },
      {
        "title": "Prime and caulk",
        "description": "Prime and caulk."
      },
      {
        "title": "Apply finish coats and complete a walkthrough",
        "description": "Apply finish coats and complete a walkthrough."
      }
    ],
    "faqs": [
      {
        "question": "How often should I repaint the exterior of my house in Maryland?",
        "answer": "Well-prepared exterior paint on siding commonly lasts roughly 7 to 10 years, and sun-exposed walls and trim may need attention sooner. Maryland's humid summers and freeze-thaw winters are hard on coatings, and surface prep matters more than paint brand."
      },
      {
        "question": "Do you have to remove the old paint before repainting?",
        "answer": "Not always. Sound paint can usually be scraped, sanded, primed and painted over. If paint is peeling, blistering or built up in failing layers, it should be stripped back to a sound surface first, otherwise the new coat will fail too."
      },
      {
        "question": "Is lead paint a concern for older Maryland homes?",
        "answer": "Homes built before 1978 may contain lead-based paint. Under the EPA's Renovation, Repair and Painting (RRP) rule, contractors who disturb paint in these homes must be EPA Lead-Safe Certified and follow lead-safe work practices, and Maryland has additional rules for pre-1978 rental properties. Ask any contractor for their certification before work begins."
      },
      {
        "question": "Can vinyl siding be painted?",
        "answer": "Yes, with proper cleaning and the right product. Use paint formulated for vinyl and a color close in lightness to the original, because dark colors can absorb heat and warp vinyl."
      },
      {
        "question": "Can you paint barns, metal roofs and chimneys?",
        "answer": "Yes. Metal surfaces need thorough cleaning, rust treatment and a metal-appropriate primer before finish coats. Barns usually need extra washing and scraping on rough-sawn wood. We assess the condition first and tell you what prep it needs."
      }
    ],
    "related": [
      "door-and-window-installation",
      "decks-siding-fence",
      "roofing-gutters-shutters"
    ],
    "heroImage": {
      "src": "/images/services/placeholder.svg",
      "alt": "Placeholder for Exterior Painting",
      "isPlaceholder": true
    }
  },
  {
    "slug": "decks-siding-fence",
    "navLabel": "Decks, Siding and Fence Installation",
    "h1": "Decks, Siding and Fence Installation in Maryland",
    "metaTitle": "Decks, Siding & Fence Installation MD | KrasPro LLC",
    "metaDescription": "Custom decks, siding replacement and fence installation in Maryland. Quality materials, permit guidance and itemized quotes. Request a free estimate.",
    "heroSubhead": "Custom decks, siding replacement and fence installation in Maryland. Quality materials, permit guidance and itemized quotes. Request a free estimate.",
    "intro": [
      "A deck, siding, or fence affects both the way you use your property and how it stands up to weather. A deck may need a targeted repair, a fresh finish, or a new layout; siding may need a small repair or replacement across a larger area. A fence has its own decisions about privacy, appearance, maintenance, and placement. We discuss pressure-treated and composite decking, vinyl, fiber cement and engineered wood siding, and wood, vinyl and aluminum fencing in terms that make their differences clear. The right choice depends on the condition of what is already there, the style of your home, your budget, and how much upkeep you are comfortable doing. We look at the site and measurements first so the proposed work fits the actual space and your priorities.",
      "Before construction, it helps to understand what can affect the plan. Many decks require permits, and fence requirements can depend on height and location; rules vary by county or city. An HOA or historic district may also require a separate review. We discuss the material choices and the proposed scope, including how new siding might match existing profiles or weathered colors. A partial repair can be practical, although a perfect match may not always be possible. For a deck or fence, site conditions and the intended use help shape the layout. The process moves from a site visit and measurements to material selection, any required approvals, construction, cleanup, and a final walkthrough. Ask about maintenance and inspection requirements as you compare options, so you can choose a solution you understand and are comfortable maintaining."
    ],
    "subServices": [
      {
        "title": "Pressure-treated and composite decks",
        "description": "Pressure-treated and composite decks."
      },
      {
        "title": "Deck repair and refinishing",
        "description": "Deck repair and refinishing."
      },
      {
        "title": "Vinyl, fiber cement and engineered wood siding",
        "description": "Vinyl, fiber cement and engineered wood siding."
      },
      {
        "title": "Siding repair",
        "description": "Siding repair."
      },
      {
        "title": "Wood, vinyl and aluminum fence",
        "description": "Wood, vinyl and aluminum fence."
      }
    ],
    "benefits": [
      {
        "title": "stronger, safer outdoor living space",
        "description": "stronger, safer outdoor living space."
      },
      {
        "title": "weather protection and lower maintenance",
        "description": "weather protection and lower maintenance."
      },
      {
        "title": "improved curb appeal",
        "description": "improved curb appeal."
      },
      {
        "title": "permit and HOA guidance",
        "description": "permit and HOA guidance."
      },
      {
        "title": "material options explained honestly",
        "description": "material options explained honestly."
      }
    ],
    "process": [
      {
        "title": "Site visit and measurements",
        "description": "Site visit and measurements."
      },
      {
        "title": "Material selection and itemized quote",
        "description": "Material selection and itemized quote."
      },
      {
        "title": "Permits, layout and construction",
        "description": "Permits, layout and construction."
      },
      {
        "title": "Final inspection, cleanup and walkthrough",
        "description": "Final inspection, cleanup and walkthrough."
      }
    ],
    "faqs": [
      {
        "question": "Do I need a permit to build a deck or fence in Maryland?",
        "answer": "Most new decks require a building permit, and many fences do depending on height and location. Rules are set by your county or city, and your HOA may have its own approval process. We check the requirements before work begins."
      },
      {
        "question": "What is the best siding for Maryland weather?",
        "answer": "Common choices are vinyl (low maintenance and budget-friendly), fiber cement (very durable and paintable) and engineered wood. The best option depends on your budget, the look you want and any HOA or historic requirements, and we explain the trade-offs plainly."
      },
      {
        "question": "How long does a deck last?",
        "answer": "Pressure-treated wood decks commonly last 10 to 20 years with regular cleaning and sealing. Composite decking often carries warranties of 25 years or more, depending on the manufacturer."
      },
      {
        "question": "Can you replace siding on just part of my house?",
        "answer": "Yes, partial repairs are possible, but matching older profiles, colors and weathering can be difficult. We tell you whether a patch will blend in or whether replacing a full wall gives a better result."
      }
    ],
    "related": [
      "door-and-window-installation",
      "exterior-painting",
      "roofing-gutters-shutters"
    ],
    "heroImage": {
      "src": "/images/services/placeholder.svg",
      "alt": "Placeholder for Decks, Siding and Fence Installation",
      "isPlaceholder": true
    }
  },
  {
    "slug": "roofing-gutters-shutters",
    "navLabel": "Roofing, Gutters, Shutters and Exterior Capping",
    "h1": "Roofing, Gutters, Shutters and Exterior Capping in Maryland",
    "metaTitle": "Roofing, Gutters & Exterior Trim in MD | KrasPro LLC",
    "metaDescription": "Roof repair and replacement, seamless gutters, shutters, chimney rain caps and aluminum capping in Maryland. Photo-backed, itemized quotes.",
    "heroSubhead": "Roof repair and replacement, seamless gutters, shutters, chimney rain caps and aluminum capping in Maryland. Photo-backed, itemized quotes.",
    "intro": [
      "Your roof and roofline work together to direct water away from the house. A missing shingle, a leaking gutter joint, damaged flashing, or exposed wood trim can each call for a different response. We assess roofing, gutters and downspouts, shutters, chimney rain caps, and exterior trim as parts of the same exterior system. Sometimes the practical answer is a localized repair; in other cases, broader replacement may be appropriate. The choice depends on the condition and extent of the damage, the age and layout of the materials, and what an inspection reveals. We explain the proposed work so you can compare repair and replacement without relying on a guess from the ground. Questions about ventilation, flashing, water flow, and protection of the surrounding property are all worth discussing before work begins.",
      "Seamless gutters are formed to fit the roofline and have fewer joints along each run, while downspout placement affects where water is carried. A chimney rain cap covers the top of the flue to help keep out rain, animals, and debris. Exterior capping means wrapping sound wood trim, such as fascia and window trim, in aluminum trim coil to reduce repainting and protect it from moisture. Rotted wood needs attention before it is covered. The project may also include shutters, soffit, or related flashing depending on the condition of your home. We review the roof and roofline, discuss the recommended scope, and explain the installation and cleanup plan. A final walkthrough gives you an opportunity to ask questions about the completed work and the maintenance it may need."
    ],
    "subServices": [
      {
        "title": "Roof repair and replacement",
        "description": "Roof repair and replacement."
      },
      {
        "title": "Seamless gutters and downspouts",
        "description": "Seamless gutters and downspouts."
      },
      {
        "title": "Shutters",
        "description": "Shutters."
      },
      {
        "title": "Chimney rain cap installation",
        "description": "Chimney rain cap installation."
      },
      {
        "title": "Exterior (aluminum) capping of fascia, trim and soffit",
        "description": "Exterior (aluminum) capping of fascia, trim and soffit."
      }
    ],
    "benefits": [
      {
        "title": "keeps water out and protects the structure",
        "description": "keeps water out and protects the structure."
      },
      {
        "title": "photo-documented problem areas before pricing",
        "description": "photo-documented problem areas before pricing."
      },
      {
        "title": "proper ventilation and flashing details",
        "description": "proper ventilation and flashing details."
      },
      {
        "title": "reduced repainting with capping",
        "description": "reduced repainting with capping."
      },
      {
        "title": "one crew for the whole roofline",
        "description": "one crew for the whole roofline."
      }
    ],
    "process": [
      {
        "title": "Roof and roofline inspection with photos",
        "description": "Roof and roofline inspection with photos."
      },
      {
        "title": "Repair-versus-replace recommendation and itemized quote",
        "description": "Repair-versus-replace recommendation and itemized quote."
      },
      {
        "title": "Installation with flashing, ventilation and protection of landscaping",
        "description": "Installation with flashing, ventilation and protection of landscaping."
      },
      {
        "title": "Magnet sweep, cleanup and final walkthrough",
        "description": "Magnet sweep, cleanup and final walkthrough."
      }
    ],
    "faqs": [
      {
        "question": "How do I know if I need a roof repair or a full replacement?",
        "answer": `Widespread granule loss, curling or missing shingles, multiple leaks, or a roof near the end of its service life point toward replacement. Isolated damage can usually be repaired.${site.trust.photoEvidence ? " We photograph the problem areas and show you before we quote." : ""}`
      },
      {
        "question": "Are seamless gutters worth it, and what size do I need?",
        "answer": "Seamless gutters are formed to length on site, so there are fewer joints that can leak. Most homes use 5-inch gutters, while large roofs or heavy runoff may call for 6-inch. We size them to your roof and downspout layout."
      },
      {
        "question": "What is a chimney rain cap and do I need one?",
        "answer": "A rain cap covers the top of the flue to keep rain, animals and debris out. It helps protect the flue liner and prevents water damage inside the chimney, so most chimneys should have one."
      },
      {
        "question": "What is exterior capping and is it worth it?",
        "answer": "Capping wraps wood trim such as fascia and window trim in aluminum so it no longer needs repainting and is better protected from moisture. It works best over sound wood, so rotted areas are repaired first."
      }
    ],
    "related": [
      "door-and-window-installation",
      "exterior-painting",
      "decks-siding-fence"
    ],
    "heroImage": {
      "src": "/images/services/placeholder.svg",
      "alt": "Placeholder for Roofing, Gutters, Shutters and Exterior Capping",
      "isPlaceholder": true
    }
  },
  {
    "slug": "historic-building-restoration",
    "navLabel": "Historic Building Restoration",
    "h1": "Historic Building Restoration in Maryland",
    "metaTitle": "Historic Home Restoration in Maryland | KrasPro LLC",
    "metaDescription": "Careful restoration of historic homes and buildings in Maryland: wood windows, siding, trim and masonry matched to the original. Free consultation.",
    "heroSubhead": "Careful restoration of historic homes and buildings in Maryland: wood windows, siding, trim and masonry matched to the original. Free consultation.",
    "intro": [
      "Historic buildings carry details that are difficult to reproduce once they are lost. Original wood windows, siding profiles, porch trim, and masonry can tell the story of a property, but years of weather and previous repairs may leave them in uneven condition. Restoration begins by documenting what is there and deciding which elements can be repaired, which need matching materials, and which need further review. A repair-first conversation can include reglazing and weatherstripping original windows, matching siding and trim, or using compatible mortar on older brick. The right method depends on the building and the condition of each feature. We discuss the visible condition and proposed scope with you so you can weigh preservation, practical use, and maintenance without assuming every worn element must be replaced.",
      "If your property is a designated landmark or sits within a local historic district, exterior changes may need approval before work begins. The local preservation commission can explain its requirements, and photographs, drawings, and material details may be needed for review. Historic tax credits can also involve eligibility rules and advance approval; confirm the current requirements with the Maryland Historical Trust before relying on them. Planning may involve matching existing profiles, selecting compatible finishes, or considering salvaged materials where appropriate. For old masonry, the compatibility of mortar matters because an overly hard mix can damage brick. We discuss the proposed sequence from documenting existing details through planning, any required review, restoration, and a final inspection. The goal is a clear plan that respects the building and gives you useful information for its ongoing care."
    ],
    "subServices": [
      {
        "title": "Historic wood window repair and reglazing",
        "description": "Historic wood window repair and reglazing."
      },
      {
        "title": "Siding and trim matching",
        "description": "Siding and trim matching."
      },
      {
        "title": "Masonry and mortar repair",
        "description": "Masonry and mortar repair."
      },
      {
        "title": "Porches and architectural details",
        "description": "Porches and architectural details."
      },
      {
        "title": "Historic paint color and finish work",
        "description": "Historic paint color and finish work."
      }
    ],
    "benefits": [
      {
        "title": "preserves original character and value",
        "description": "preserves original character and value."
      },
      {
        "title": "repair-first approach that reviewers prefer",
        "description": "repair-first approach that reviewers prefer."
      },
      {
        "title": "matched materials and compatible methods",
        "description": "matched materials and compatible methods."
      },
      {
        "title": "help with documentation for local review",
        "description": "help with documentation for local review."
      },
      {
        "title": "careful, protective work practices",
        "description": "careful, protective work practices."
      }
    ],
    "process": [
      {
        "title": "Document the building's existing condition and details",
        "description": "Document the building's existing condition and details."
      },
      {
        "title": "Plan repairs and prepare documentation for any required review",
        "description": "Plan repairs and prepare documentation for any required review."
      },
      {
        "title": "Restore using matched or salvaged materials and compatible methods",
        "description": "Restore using matched or salvaged materials and compatible methods."
      },
      {
        "title": "Final inspection and care guidance",
        "description": "Final inspection and care guidance."
      }
    ],
    "faqs": [
      {
        "question": "Do I need approval to restore or alter a historic home in Maryland?",
        "answer": "If your property is in a local historic district or is a designated landmark, exterior changes usually need review and approval before work starts. This is handled by the local historic preservation commission. We help you gather photos, drawings and material details for your application."
      },
      {
        "question": "Are there tax credits for historic restoration in Maryland?",
        "answer": "Maryland offers a state heritage structure rehabilitation tax credit for qualified work on eligible historic properties, and federal credits exist for certain income-producing historic buildings. Eligibility and pre-approval steps apply, so confirm with the Maryland Historical Trust before work begins."
      },
      {
        "question": "Can original wood windows be repaired instead of replaced?",
        "answer": "Often yes. Repairing, reglazing and weatherstripping original windows preserves their character and can improve performance. Replacement is reserved for sash or frames that are beyond repair, and historic review boards frequently prefer repair."
      },
      {
        "question": "How do you match original materials like siding, trim and brick mortar?",
        "answer": "We document the existing profiles, wood species, finishes and mortar, then source or mill matching material or use salvaged pieces. For old brick we use compatible mortar rather than a harder modern mix that can damage the brick."
      }
    ],
    "related": [
      "door-and-window-installation",
      "exterior-painting",
      "decks-siding-fence"
    ],
    "heroImage": {
      "src": "/images/services/placeholder.svg",
      "alt": "Placeholder for Historic Building Restoration",
      "isPlaceholder": true
    }
  },
  {
    "slug": "garage-additions",
    "navLabel": "Garage Additions",
    "h1": "Garage Additions in Maryland",
    "metaTitle": "Garage Additions in Maryland | KrasPro LLC",
    "metaDescription": "Attached and detached garage additions in Maryland, from permits and foundation to roofing and finish. Itemized quotes and clear timelines.",
    "heroSubhead": "Attached and detached garage additions in Maryland, from permits and foundation to roofing and finish. Itemized quotes and clear timelines.",
    "intro": [
      "A garage addition can provide space for vehicles, storage, or a workshop, but the best layout starts with your property and how you plan to use it. Attached garages offer convenient access to the house, while detached garages can provide more flexibility in placement. A one-car or two-car layout brings different space and access needs, and an existing garage may instead be a candidate for conversion or improved storage. We discuss your goals, the site, and the relationship between the new structure and your home before settling on a scope. Exterior materials, rooflines, doors, and other visible details can be considered together so the addition fits the property. Site conditions, electrical needs, and the type of foundation can all affect the plan and the quote.",
      "Garage additions require a building permit and zoning review, and a site plan or survey may be needed to assess setbacks and lot coverage. HOA approval may also apply. Requirements and review times vary by jurisdiction, so these details should be confirmed before construction starts. After a site visit and discussion of the layout, the work can be planned around permits, foundation, framing, roofing, electrical work, and exterior finishes. The written scope should make clear what is included and how the work is expected to proceed. Construction timing depends on the size and complexity of the addition, site conditions, weather, and approvals; a realistic schedule should account for those factors. At the end, the process includes any required final inspection, cleanup, and a walkthrough so you can review the completed addition and ask questions."
    ],
    "subServices": [
      {
        "title": "Attached garages",
        "description": "Attached garages."
      },
      {
        "title": "Detached garages",
        "description": "Detached garages."
      },
      {
        "title": "One-car and two-car layouts",
        "description": "One-car and two-car layouts."
      },
      {
        "title": "Garage conversions and storage",
        "description": "Garage conversions and storage."
      },
      {
        "title": "Doors, openers, electrical and siding to match the home",
        "description": "Doors, openers, electrical and siding to match the home."
      }
    ],
    "benefits": [
      {
        "title": "added storage and vehicle protection",
        "description": "added storage and vehicle protection."
      },
      {
        "title": "added home value",
        "description": "added home value."
      },
      {
        "title": "design and materials matched to the existing house",
        "description": "design and materials matched to the existing house."
      },
      {
        "title": "permit paperwork support",
        "description": "permit paperwork support."
      },
      {
        "title": "one contractor from foundation to finish",
        "description": "one contractor from foundation to finish."
      }
    ],
    "process": [
      {
        "title": "Site visit, goals and rough layout",
        "description": "Site visit, goals and rough layout."
      },
      {
        "title": "Plans, permits and an itemized quote",
        "description": "Plans, permits and an itemized quote."
      },
      {
        "title": "Foundation, framing, roofing, electrical and exterior finish",
        "description": "Foundation, framing, roofing, electrical and exterior finish."
      },
      {
        "title": "Final inspection, cleanup and walkthrough",
        "description": "Final inspection, cleanup and walkthrough."
      }
    ],
    "faqs": [
      {
        "question": "How much does it cost to add a garage in Maryland?",
        "answer": `Cost depends on the size, whether it is attached or detached, the foundation type, electrical needs, exterior finishes and site conditions. ${site.trust.itemizedQuotes ? "After a site visit, you receive a written, itemized quote that shows what each part of the project costs." : "After a site visit, you receive a written quote for the proposed work."}`
      },
      {
        "question": "Do I need a permit for a garage addition?",
        "answer": "Yes. Garage additions require a building permit and zoning review for setbacks and lot coverage, and often a site plan or survey. If you have an HOA, it may need to approve the design as well. We help coordinate the paperwork."
      },
      {
        "question": "Should I build an attached or detached garage?",
        "answer": "Attached garages are convenient in bad weather and can sometimes support living space above. Detached garages offer more placement flexibility and are well suited to workshops. Lot layout and local setback rules often decide which works."
      },
      {
        "question": "How long does a garage addition take to build?",
        "answer": "After permits are approved, construction typically takes several weeks to a few months depending on size, complexity and weather. Permit review time varies by jurisdiction. We put a realistic schedule in your quote."
      }
    ],
    "related": [
      "door-and-window-installation",
      "exterior-painting",
      "decks-siding-fence"
    ],
    "heroImage": {
      "src": "/images/services/placeholder.svg",
      "alt": "Placeholder for Garage Additions",
      "isPlaceholder": true
    }
  }
];
