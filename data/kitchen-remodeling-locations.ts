import type { ServiceLocation } from "./service-locations";

type KitchenCity = Omit<ServiceLocation, "serviceSlug" | "locationSlug" | "status" | "title"> & { name: string };

export const kitchenCities = [
  {
    name: "Baltimore",
    metaDescription: "Kitchen Remodeling in Baltimore, MD. KrasPro plans narrow rowhouse kitchens around delivery access, party walls and storage, with a written scope before work starts.",
    introduction: "In a Baltimore brick rowhouse, the kitchen is often the last stop on the way to the back door. Grocery bags, recycling and a dishwasher with its door open can turn the same narrow aisle into a bottleneck. Start by showing us how you get through the room on an ordinary evening.",
    focusTitle: "Why choose KrasPro for a Baltimore rowhouse kitchen?",
    paragraphs: [
      "We measure the entry from the sidewalk and the route from the rear yard before laying out cabinets or ordering a countertop. An alley gate can be the simpler delivery route, but the pinch point may be a turn inside the house. We make those handling details part of the estimate.",
      "The wall shared with the next house also influences where lights, cabinets and ventilation can go. We document the wall and existing connections before deciding whether a shallow pantry, a wider prep counter or a shorter cabinet run frees up the most space."
    ],
    checklist: [
      "Back gate and narrowest delivery turn",
      "Dishwasher door and route to the yard",
      "Existing hood route and party wall"
    ],
    faqs: [
      {
        question: "Will a standard dishwasher fit my galley?",
        answer: "Measure the clear aisle with the door down. Bring the appliance model so we can check handle projection and whether someone can still reach the back door."
      },
      {
        question: "Can long counters come through the alley?",
        answer: "A site measure can identify the tighter delivery route. The counter fabricator can then place seams where surfaces can be handled without awkward turns."
      },
      {
        question: "Should I keep the sink where it is?",
        answer: "Keeping it can simplify the scope. Compare how much prep space you gain elsewhere before including a drain or supply relocation in the quote."
      }
    ],
    guide: {
      nearby: [
        "dundalk",
        "catonsville",
        "towson",
        "essex"
      ],
      pricingNote: "Compare a cabinet refresh with a new galley layout. Handling long countertop pieces and fitting cabinets to uneven masonry can change labor even when the room is small.",
      examples: [
        {
          title: "A little more landing space",
          description: "A narrow galley could gain a continuous counter by trading a tall cabinet beside the sink for drawers below the window. Groceries would have a place to land without stacking them on the range."
        },
        {
          title: "A rear entry that stays clear",
          description: "In a rowhouse with a frequently used alley door, a shallow shelf and hooks could replace a deep free-standing pantry. That leaves the turn into the kitchen open while keeping everyday bags near the exit."
        }
      ],
      sampleReviews: [
        "The cabinet delivery plan included the alley gate.",
        "We could open the dishwasher and still get outside."
      ]
    },
    cta: {
      title: "Show Us Your Baltimore Galley",
      description: "Send a picture from each end of the kitchen and one from the alley. Tell us where you run out of room first."
    }
  },

  {
    name: "Bel Air",
    metaDescription: "Kitchen Remodeling in Bel Air, MD. KrasPro plans cabinets and storage around breakfast traffic and yard access, with clear allowances for finishes.",
    introduction: "A busy morning gives a better kitchen brief than an empty room. In a Bel Air house where the kitchen opens onto a breakfast area and a back deck, one person making coffee can end up in the path of another heading outside with a bag. We plan the busiest routes first.",
    focusTitle: "Why Bel Air families plan breakfast traffic with KrasPro",
    paragraphs: [
      "In Harford County homes with room for a table, a bigger island can compete with seating you already use. We measure from chairs pulled out, from the open refrigerator and from the back door. That makes it easier to compare a second work surface with a narrower cabinet bank.",
      "Summer humidity and wet shoes from the yard also matter where flooring continues past the kitchen. We look at the transition, the mat area and the cleaning routine before the quote lists a floor material or asks you to replace more of the adjoining room."
    ],
    checklist: [
      "Breakfast table with chairs pulled back",
      "Fridge swing on the deck route",
      "Floor edge at the yard entry"
    ],
    faqs: [
      {
        question: "Would a second sink make school mornings easier?",
        answer: "Describe who prepares food and who loads the dishwasher. In many layouts a landing counter and a separate drink station solve more traffic problems with fewer changes."
      },
      {
        question: "Can the breakfast furniture stay?",
        answer: "Bring the table dimensions and note the chairs you use every day. We can mark the movement needed around them on the layout."
      },
      {
        question: "Where should the yard flooring transition go?",
        answer: "We look for a natural stopping point before ordering surfaces. The threshold should make sense with the door swing, wet footwear and your plan for cleaning."
      }
    ],
    guide: {
      nearby: [
        "phoenix",
        "sparks",
        "parkton",
        "towson"
      ],
      pricingNote: "A cabinet and counter replacement can keep the breakfast area intact. Expanding an island or carrying new flooring into the adjoining room adds material and makes the installation boundary important.",
      examples: [
        {
          title: "A breakfast station at kid height",
          description: "A drawer with bowls and cereal near the table could let children serve themselves while adults use the range. Heat-sensitive items could stay in a separate pantry away from the coffee machine."
        },
        {
          title: "A deck route past the island",
          description: "A shorter island could leave room beside a back door frequently used in summer. Orienting the stools toward the breakfast area would help keep traffic out of the sink and dishwasher zone."
        }
      ],
      sampleReviews: [
        "The kids could reach bowls without crossing the stove.",
        "The floor estimate showed exactly where the new surface stopped."
      ]
    },
    cta: {
      title: "Plan Your Bel Air Kitchen Around One Busy Morning",
      description: "Tell us who needs to get to the table, the fridge and the back door at the same time. Include the furniture you plan to keep."
    }
  },

  {
    name: "Bethesda",
    metaDescription: "Kitchen Remodeling in Bethesda, MD. KrasPro checks tall cabinet fit, appliance clearance and delivery access, then puts installation details in writing.",
    introduction: "Cabinets can look generous on a floor plan and still feel crowded at eye level. In Bethesda, we might review a compact condo kitchen one day and an addition to an older Montgomery County house the next. In either setting, the height of a window, soffit or tall refrigerator determines what fits on the wall.",
    focusTitle: "Why KrasPro checks the full cabinet elevation in Bethesda",
    paragraphs: [
      "We look at each cabinet elevation alongside the appliances you plan to buy. The drawing should show enough room to open the fridge and remove its storage bins, as well as where upper cabinet doors stop near the hood. Resolving those details ahead of ordering is easier than changing panels after delivery.",
      "Where a building or association manages shared access, tell us what it requires for deliveries, floor protection and work hours. That information belongs with the appliance and cabinet selections because it can affect when materials arrive and where they can wait."
    ],
    checklist: [
      "Refrigerator clearance at walls and panels",
      "Soffits and ceiling height along the cabinet line",
      "Shared delivery hours if applicable"
    ],
    faqs: [
      {
        question: "Can I choose integrated appliances after cabinets are ordered?",
        answer: "Choose the exact models before approval. Door swing, ventilation space and panel specifications can change the cabinet or hardware order."
      },
      {
        question: "What if the building only accepts weekday deliveries?",
        answer: "Share its procedures before scheduling. Delivery reservations and temporary storage affect the order in which trades and materials can be brought in."
      },
      {
        question: "Can tall cabinets run through the old soffit?",
        answer: "We first identify what is above them. Its contents determine whether to plan around the soffit or price changes to the room."
      }
    ],
    guide: {
      nearby: [
        "rockville",
        "silver-spring",
        "college-park",
        "laurel"
      ],
      pricingNote: "Tall panels, custom fillers and concealed appliances belong in a cabinet quote as separate items. For units with managed deliveries, ask what handling and protection the scope includes.",
      examples: [
        {
          title: "An uncluttered apartment wall",
          description: "A paneled refrigerator and compact pantry could share one wall with the microwave stored below the counter. The plan would check whether the unit entry and elevator can handle the tallest finished panel."
        },
        {
          title: "An addition meets the original kitchen",
          description: "A new cabinet run could align with an existing window while a service cabinet conceals the change in wall depth. Keeping the joint visible on the elevation makes it easier to compare trim approaches."
        }
      ],
      sampleReviews: [
        "The drawings caught a wall that blocked the refrigerator bin.",
        "Delivery hours came up before we ordered the panels."
      ]
    },
    cta: {
      title: "Bring Us Your Bethesda Cabinet and Appliance List",
      description: "Send the model numbers you are considering, plus a photo of each wall. Include any building access requirements you already have."
    }
  },

  {
    name: "Catonsville",
    metaDescription: "Kitchen Remodeling in Catonsville, MD. KrasPro scopes new storage and surfaces around older woodwork, existing floors and practical transitions by the doorway.",
    introduction: "In an older Catonsville house, the doorway to the dining room can be one of the best parts of the kitchen. Wide casings, deep sills and original wood floors may be the details worth building around. Point them out before discussing where a new cabinet run or counter should end.",
    focusTitle: "Why KrasPro starts with the trim you want to keep in Catonsville",
    paragraphs: [
      "We compare the placement of existing openings with what happens when a drawer or appliance is fully open. Leaving a little wall exposed beside an old casing can give the woodwork room and let the drawer work. Those small offsets are measurable and should appear on the cabinet plan.",
      "Where the kitchen and dining room have different floor heights, we inspect the joint and ask which floor you intend to retain. The written scope can show a clean place to stop and whether refinishing the adjoining boards is a separate decision."
    ],
    checklist: [
      "Dining-room casing width and depth",
      "Height difference at the floor joint",
      "Wall space beyond window trim"
    ],
    faqs: [
      {
        question: "Can you match older stained trim?",
        answer: "Bring a photo in daylight and keep a reference piece if one is already loose. Samples are easier to compare in the actual room against the wood that will remain."
      },
      {
        question: "Can I keep hardwood in the dining room?",
        answer: "Yes, plan the meeting point early. We discuss how the floor heights, grain direction and doorway affect the finish and whether adjacent boards need local repair."
      },
      {
        question: "Should the dishwasher sit near an old casing?",
        answer: "Check its open door beside the casing and nearby drawers. A small spacer or cabinet change may keep both sides accessible."
      }
    ],
    guide: {
      nearby: [
        "baltimore",
        "ellicott-city",
        "columbia",
        "pikesville"
      ],
      pricingNote: "Keeping original features can reduce demolition while increasing the time to fit edges. Compare the cabinet and finish allowance with any separately listed trim repairs or flooring transition.",
      examples: [
        {
          title: "Storage beside a deep sill",
          description: "A bank of drawers could end short of an original window casing, with an open ledge for objects that need daylight. The remaining wall width would determine whether the cabinet handles clear the trim."
        },
        {
          title: "A defined doorway between rooms",
          description: "A small pass-through could connect a prep area with the dining room while leaving the doorway intact. Before deciding, the plan would check the wall and identify how new edges should meet existing millwork."
        }
      ],
      sampleReviews: [
        "The dining room woodwork still frames the kitchen.",
        "We chose the floor joint while we could still compare materials."
      ]
    },
    cta: {
      title: "Decide What to Preserve in Your Catonsville Kitchen",
      description: "Send pictures of the doorways, windows and floors you value. Tell us which kitchen feature you are most ready to replace."
    }
  },

  {
    name: "College Park",
    metaDescription: "Kitchen Remodeling in College Park, MD. KrasPro designs easy-care shared kitchens, with practical pantry storage and clearly priced cabinet and appliance work.",
    introduction: "A kitchen shared by several adults needs places to put things as much as it needs a stove. In College Park, where owner-occupied homes and rentals sit around the university community, we ask who uses the kitchen and what happens when more than one person cooks or shops on the same day.",
    focusTitle: "Why College Park kitchens benefit from a durable shared layout",
    paragraphs: [
      "We map how people store their groceries, where they set hot pans and what they can wipe down in a hurry. Clearing a landing area at the refrigerator can make more difference than adding a second set of upper cabinets. For heavy use, ask about replacement parts for pulls, hinges and drawer slides.",
      "Where the work affects an occupied home, it is worth deciding how long dishes and meals will need a temporary setup. We note which parts of the house are used to move materials and what rooms need protection. That makes the scope easier to compare ahead of a turnover or move."
    ],
    checklist: [
      "Separate dry storage for occupants",
      "Wipeable wall area beside the cooktop",
      "Temporary meal setup while the kitchen is out"
    ],
    faqs: [
      {
        question: "What cabinet hardware is easiest to replace?",
        answer: "Choose pulls with common mounting dimensions and ask whether the cabinet line has readily available hinge and slide replacements."
      },
      {
        question: "Can we coordinate work with a lease turnover?",
        answer: "Share vacancy and move-in dates before ordering. We can review lead times and which parts of the work can happen while the property is empty."
      },
      {
        question: "How do we keep a shared kitchen organized?",
        answer: "Measure the items residents bring in and assign cupboard or drawer zones. Adjustable storage is usually easier to share when the household changes."
      }
    ],
    guide: {
      nearby: [
        "silver-spring",
        "laurel",
        "bethesda",
        "columbia"
      ],
      pricingNote: "Durable stock cabinet lines may give a clearer parts and replacement path. Include the cost of patching exposed flooring if a different depth or appliance width changes the footprint.",
      examples: [
        {
          title: "Pantry shelves divided by household",
          description: "A narrow pantry could use adjustable shelves so each occupant has a dry-food zone. Shared cookware could sit in a drawer below the remaining prep counter."
        },
        {
          title: "A counter between two cooks",
          description: "A clear stretch of wall counter could hold a cutting board while a second person drains pasta. A nearby drawer for colanders keeps both people out of the refrigerator path."
        }
      ],
      sampleReviews: [
        "We left space for groceries from two people at once.",
        "The replacement hardware was easy to identify."
      ]
    },
    cta: {
      title: "Plan a College Park Kitchen That Holds Up to Daily Use",
      description: "Tell us how many people cook there, how they share groceries and when the room can be out of use."
    }
  },

  {
    name: "Columbia",
    metaDescription: "Kitchen Remodeling in Columbia, MD. KrasPro maps pantry access, island traffic and prep zones, with separate options for cabinets and layout changes.",
    introduction: "At the end of the afternoon in a Columbia home, the shortest path from the entry to the pantry can cross the busiest part of the kitchen. A room that opens to a family area has to handle snacks, homework and meals together. We trace those paths before sketching the island.",
    focusTitle: "Why KrasPro tests the paths through a Columbia kitchen",
    paragraphs: [
      "In a Howard County home with an existing peninsula, we compare what it blocks with what it holds. Removing it may help movement yet leave you without the only long stretch of counter. A shorter end cabinet or a less deep base can change the route while preserving a place for prep.",
      "If an exterior vent or other outside detail is involved, bring any village or association guidance that applies to the address. Flagging that early helps us compare cabinet and ventilation choices in the same scope rather than reopening those choices once materials are selected."
    ],
    checklist: [
      "Path from entry to pantry",
      "Peninsula outlets and storage to replace",
      "Any exterior vent review for your address"
    ],
    faqs: [
      {
        question: "Would removing the peninsula mean new flooring?",
        answer: "We check whether the surface continues underneath it. The answer helps decide whether to add a patch, replace a zone or change the layout less."
      },
      {
        question: "Can I keep the island outlets where they are?",
        answer: "Tell us what you plan to plug in. The new cabinet layout and electrical scope need to be reviewed together before their locations are settled."
      },
      {
        question: "Should I ask about an outside hood cover early?",
        answer: "Yes, especially if your property has exterior design guidelines. The preferred outlet location can affect the route and the cabinet above the range."
      }
    ],
    guide: {
      nearby: [
        "ellicott-city",
        "laurel",
        "catonsville",
        "hanover"
      ],
      pricingNote: "Price a retained peninsula and a redesigned island as separate layouts. New floor patching and supply routes can matter as much as the additional cabinets.",
      examples: [
        {
          title: "Snacks at the edge of the room",
          description: "A pantry cabinet nearest the family room could hold snacks and water bottles while the corner near the range stays available for cooking. The shelf depth would reflect what children can reach safely."
        },
        {
          title: "A short peninsula with a clear end",
          description: "Removing one base cabinet could straighten the route toward the table. Relocating daily utensils into the remaining bank would preserve their place near the prep surface."
        }
      ],
      sampleReviews: [
        "The new path to the pantry was easy to picture.",
        "The island option included the flooring work in the same estimate."
      ]
    },
    cta: {
      title: "Trace the Busiest Route in Your Columbia Kitchen",
      description: "Start at the entry and walk to the pantry, then out to the family room. Send a sketch marking the furniture and corners that slow you down."
    }
  },

  {
    name: "Dundalk",
    metaDescription: "Kitchen Remodeling in Dundalk, MD. KrasPro plans compact cabinets around the rear entry and specifies easy-clean finishes and floor work in a written scope.",
    introduction: "From a porch or back step into a Dundalk kitchen, it can take only a few strides to reach the sink. In a compact rowhouse or a smaller detached home, that useful short route also makes it easy to track in rain or crowd the cook. We start with what happens in those first few feet.",
    focusTitle: "Why KrasPro plans around the rear door in Dundalk",
    paragraphs: [
      "We check how the exterior door opens against nearby drawers and how often you carry groceries or recycling through it. A useful change may simply be a landing shelf where a deep cabinet used to stand. The estimate can describe that exchange in inches of aisle and storage rather than cabinet count alone.",
      "Near the floor, look for swollen cabinet edges or loose trim and show them to us. We can discuss whether the exterior threshold, wear from cleaning or a past leak needs investigation before you commit to a cabinet finish or floor transition."
    ],
    checklist: [
      "Door and screen door movement",
      "Cabinet ends next to wet shoes",
      "A clear spot for bags and recycling"
    ],
    faqs: [
      {
        question: "Can I keep the screen door during a remodel?",
        answer: "Show us how both doors swing and where they stop. The plan should leave enough room for deliveries and keep useful clearances once the cabinets are installed."
      },
      {
        question: "What does a softened cabinet edge tell me?",
        answer: "It is a reason to inspect nearby plumbing and the floor, especially around the back door or sink. Repair scope depends on what caused the wear."
      },
      {
        question: "Will drawers store pots better here?",
        answer: "Bring the diameter and height of your tallest cookware. Those dimensions tell us whether deep drawers fit better than a door cabinet with an adjustable shelf."
      }
    ],
    guide: {
      nearby: [
        "essex",
        "baltimore",
        "towson",
        "catonsville"
      ],
      pricingNote: "Small rooms can still have uneven cabinet walls and flooring repairs at an entry. Ask to see those preparations listed alongside counters and hardware in a written estimate.",
      examples: [
        {
          title: "A shelf for bags just inside the door",
          description: "A short landing shelf and a drawer underneath could replace a bulky table at the rear entrance. The open space beneath one end could keep shoes clear of the appliance path."
        },
        {
          title: "An easy-to-clean short cabinet run",
          description: "New drawers under the prep counter could hold cookware and bring the bottom shelf within reach. A continuous finish on the exposed cabinet end would make it easier to wipe after wet days."
        }
      ],
      sampleReviews: [
        "There was finally a place to put bags by the back door.",
        "The scope called out the rough floor at the threshold."
      ]
    },
    cta: {
      title: "Show Us the Way Into Your Dundalk Kitchen",
      description: "Take a photo from the rear step with the door open. Tell us where you unload groceries and what you would like to reach without crossing the room."
    }
  },

  {
    name: "Ellicott City",
    metaDescription: "Kitchen Remodeling in Ellicott City, MD. KrasPro measures delivery paths, retained openings and cabinet walls, with site preparation spelled out in the quote.",
    introduction: "An Ellicott City kitchen in an older house can have a lot in common with one in a newer Howard County development. A window divides up the wall, a doorway sets the limit on storage, and the route into the room tells us how large a cabinet or counter can be.",
    focusTitle: "Why exact measurements matter in an Ellicott City kitchen",
    paragraphs: [
      "When the site has sloping access or a tight turn off the entry, we note the conditions the crew will actually work with. That may mean discussing smaller cabinet sections or putting a countertop seam in a practical place. These details belong in the estimate before any stone is cut.",
      "We check the cabinet wall at several points, especially where trim and existing finishes will remain. A surface can look square in a photo and turn out to need a filler that changes drawer placement. Measuring the wall also makes it easier to compare a minimal refresh with a new cabinet run."
    ],
    checklist: [
      "Delivery path including any steps",
      "Cabinet wall at base and upper height",
      "Planned seam and sink locations"
    ],
    faqs: [
      {
        question: "Should I send photos of the approach?",
        answer: "Yes. Include the parking area, steps and doorway. The smallest turn along the route may determine how the largest pieces can come in."
      },
      {
        question: "Can old plaster stay around new cabinets?",
        answer: "We look at its condition and exactly where the cabinets end. The quote can distinguish local preparation from larger repairs that only make sense as a separate scope."
      },
      {
        question: "When is the countertop measured?",
        answer: "After the base cabinets are in position and the sink details are confirmed. Early drawings help plan handling, but field measurements control fabrication."
      }
    ],
    guide: {
      nearby: [
        "catonsville",
        "columbia",
        "finksburg",
        "mt-airy"
      ],
      pricingNote: "Countertop handling and extra finish work can affect a tight kitchen. Compare those items with cabinet construction and whether the quote includes patching visible walls.",
      examples: [
        {
          title: "A counter in manageable sections",
          description: "A kitchen approached from a steep drive could use a considered seam location so the stone arrives in pieces the route can accommodate. The layout would place the main prep area away from the seam."
        },
        {
          title: "A cabinet bank beside an uneven wall",
          description: "Shallow drawers near the door could make better use of the corner than a deep pantry. A removable filler could leave space for the cabinet doors and simplify future adjustments."
        }
      ],
      sampleReviews: [
        "The counter seam was planned before anyone cut the slab.",
        "We knew what wall preparation was included."
      ]
    },
    cta: {
      title: "Walk Us Through Your Ellicott City Kitchen Access",
      description: "Send one photo from the delivery side of the house and another of the cabinet wall you want to change. Mark which finishes you intend to keep."
    }
  },

  {
    name: "Essex",
    metaDescription: "Kitchen Remodeling in Essex, MD. KrasPro scopes cabinet wear, back-door traffic and cleanup with practical finish options and itemized repairs.",
    introduction: "When the back entry leads straight into the kitchen, a wet Maryland afternoon can show which finishes work well. Around Essex, a compact house or a home near the water might use that route for shopping, outdoor gear and weekday meals. The plan starts with the surface people step on first.",
    focusTitle: "Why KrasPro checks how Essex kitchens handle wet-weather traffic",
    paragraphs: [
      "We look at the cabinet ends and base trim that take the most wear from traffic and routine cleaning. If a surface shows repeated damage, we discuss the source before selecting a replacement. That might lead to a different panel, a tray area or a separate repair near the door.",
      "A coat drop or a deep recycling bin can use the same wall space as a kitchen pantry. We compare what can move to a shelf with what needs enclosed space. The finished plan should still leave a clear path from the yard to the sink during dinner prep."
    ],
    checklist: [
      "Entry flooring and nearby cabinet ends",
      "Place for damp gear and reusable bags",
      "Clear passage with the recycling drawer open"
    ],
    faqs: [
      {
        question: "How can I show where the floor gets wet?",
        answer: "Send dry photos of the threshold and tell us when moisture shows up. Timing after a storm or after washing the floor helps identify the area that needs a closer look."
      },
      {
        question: "Will refinishing fix worn bottom edges?",
        answer: "That depends on the condition of the box and panel. We review sound surfaces for refinishing and separately discuss anything that needs replacing."
      },
      {
        question: "Should gear storage go beside the kitchen?",
        answer: "It can work when it has a defined place outside the cooking path. Measure the largest bins or bags before choosing the depth."
      }
    ],
    guide: {
      nearby: [
        "dundalk",
        "baltimore",
        "towson",
        "glen-burnie"
      ],
      pricingNote: "Ask for the condition of the entry floor and cabinet panels to be listed separately from decorative finishes. Keeping sound cabinet boxes can leave more room in the budget for those repairs.",
      examples: [
        {
          title: "A durable base beside the back step",
          description: "A new end panel next to the door could meet the floor over an easy-to-clean transition. An open shelf above a tray would leave wet items away from food storage."
        },
        {
          title: "A sink zone with room for cleanup",
          description: "A narrow pullout for recycling could move nearer the sink, with cleaners kept separately. The door swing would be checked against the narrow aisle before choosing the pullout width."
        }
      ],
      sampleReviews: [
        "Wet gear had a home without taking over the prep aisle.",
        "The new end panel was easier to wipe down."
      ]
    },
    cta: {
      title: "Show Us Where Your Essex Kitchen Takes the Most Wear",
      description: "Point out the entry, cabinet ends and floor seams in your photos. Tell us what you bring through the door in wet weather."
    }
  },

  {
    name: "Finksburg",
    metaDescription: "Kitchen Remodeling in Finksburg, MD. KrasPro plans bulk storage and garage-side grocery routes, with delivery requirements and options in writing.",
    introduction: "A garage-side entry changes the best place for the refrigerator and pantry. In a Finksburg home with a longer driveway and a kitchen set back from the main door, that side route may be the one used for nearly every grocery trip. We plan the unpacking spot with that route in mind.",
    focusTitle: "Why a Finksburg kitchen starts at the grocery drop",
    paragraphs: [
      "Show us the boxes, small appliances and cookware you currently store in several rooms. Deep shelves can hold bulky items, but shallow shelves make food easier to see. We plan shelf depths around what belongs near the stove and what you reach for once a month.",
      "For a Carroll County property with a longer approach, we also walk the delivery route and check if there is a dry place to stage cabinets. Knowing where materials can be brought in helps keep the household entrance usable while the old kitchen is removed."
    ],
    checklist: [
      "Counter or shelf beside the garage entry",
      "Depth for bulky cookware and pantry food",
      "Dry staging area and access for deliveries"
    ],
    faqs: [
      {
        question: "Will a deep pantry hold more usable food?",
        answer: "Depth helps for bulk purchases, but items can disappear behind others. Compare one row of visible shelves with pullouts for the places where you need depth."
      },
      {
        question: "Can materials come in through the garage?",
        answer: "Check the largest opening and interior turn. We also discuss what needs to remain accessible and whether the garage is a practical place for dry staging."
      },
      {
        question: "Where should a stand mixer live?",
        answer: "Decide how often it is used and measure its height. A dedicated counter or lift can be priced alongside the regular shelf option."
      }
    ],
    guide: {
      nearby: [
        "westminster",
        "reisterstown",
        "owings-mills",
        "mt-airy"
      ],
      pricingNote: "Compare a tall pantry bank with a separate pantry fit-out. Storage hardware and the amount of cabinet frontage each option needs can change the quote.",
      examples: [
        {
          title: "Unpack by the refrigerator",
          description: "A stretch of counter next to a tall fridge could catch shopping bags before their contents are sorted. A pantry with shallow shelves opposite could keep labels visible without creating a second stop across the room."
        },
        {
          title: "A baking drawer in the main work zone",
          description: "Heavy mixing bowls and flour could move to drawers near the worktop, while seasonal trays stay in the pantry. The plan would compare drawer load ratings and heights before choosing cabinets."
        }
      ],
      sampleReviews: [
        "Shopping bags come in beside the pantry now.",
        "We grouped baking tools by the counter where they are used."
      ]
    },
    cta: {
      title: "Plan the Grocery Route in Your Finksburg Kitchen",
      description: "Start at the door you use after shopping. Tell us where the bags land and send dimensions of the things that never seem to fit."
    }
  },

  {
    name: "Frederick",
    metaDescription: "Kitchen Remodeling in Frederick, MD. KrasPro measures older openings and new appliances, with itemized options for cabinets, trim and floor transitions.",
    introduction: "An older Frederick kitchen may have windows that sit lower than today's counter height and an opening placed for furniture from a different era. Those are things you can plan around. Show us the room from the doorway before asking how many new cabinets will fit.",
    focusTitle: "Why KrasPro checks older openings before ordering in Frederick",
    paragraphs: [
      "We note the sill height, door casings and places where the wall changes depth. Sometimes the best cabinet run is shorter than expected because it leaves the window usable and the new drawers clear the trim. We compare that option with a fuller layout before deciding what should happen to the old woodwork.",
      "In established neighborhoods and newer parts of Frederick, material access can look very different. If your kitchen is reached through a porch, a tight front hall or a longer path around the house, include that in your photos. The route can influence whether the plan calls for shorter cabinet sections and where the counter seams can sit."
    ],
    checklist: [
      "Old window sills and existing casings",
      "Changes in wall depth along the base",
      "Door and hall widths for appliance delivery"
    ],
    faqs: [
      {
        question: "Can I keep a window below counter height?",
        answer: "Often the layout can stop short or use a lower surface in that bay. We compare the usable prep space and how the proposed finish meets the trim."
      },
      {
        question: "Does an older home always need wiring work?",
        answer: "Scope depends on the existing installation and proposed appliance loads. Share appliance model numbers and show where you use outlets now so the trade review has a starting point."
      },
      {
        question: "Should I order a wider refrigerator before the visit?",
        answer: "Measure the opening and the full access route first. Account for handle projection, service clearances and drawers that need room to open."
      }
    ],
    guide: {
      nearby: [
        "mt-airy",
        "westminster",
        "finksburg",
        "rockville"
      ],
      pricingNote: "Fitting cabinets beside retained millwork and adapting a floor edge can add time. Confirm what portions of the old finish the price covers before selecting the cabinet package.",
      examples: [
        {
          title: "A window-side ledge below counter height",
          description: "A low window could keep its original sill while a separate shallow perch holds herbs and a mug. The taller prep counter would start past the casing."
        },
        {
          title: "A long countertop joined away from the sink",
          description: "A straight run could divide into sections to fit a narrow delivery route. A fabricator would assess a joint away from the main wash area and match the cut to cabinet support."
        }
      ],
      sampleReviews: [
        "The window remained easy to open after the cabinet change.",
        "The scope included the old floor edge at the doorway."
      ]
    },
    cta: {
      title: "Send the Windows and Doorways in Your Frederick Kitchen",
      description: "Photograph the full wall and the route from the entry. Mark the piece of older trim or flooring you want the new work to meet."
    }
  },

  {
    name: "Glen Burnie",
    metaDescription: "Kitchen Remodeling in Glen Burnie, MD. KrasPro improves cleanup routes and storage near the laundry, with options to keep fixtures and renew the floor.",
    introduction: "A kitchen next to the laundry does double duty in many Glen Burnie houses. In a mid-century rancher or an updated detached home, laundry baskets, dish loading and a trip to the yard can all pass through the same opening. We look at that overlap before pricing a new cabinet run.",
    focusTitle: "Why KrasPro plans the cleanup route in Glen Burnie",
    paragraphs: [
      "We ask which appliances can stay in place and measure what happens when they are all used. A dishwasher door and a laundry-room door that both open across the same path can shape the entire layout. The drawings should show the actual door movements and how much floor remains clear.",
      "The flooring line matters if kitchen work stops at the laundry or a back hall. We talk through what needs to be washable, where a new material can end and whether any older flooring will show beyond the cabinets. Putting the boundary in the scope gives two proposals a common starting point."
    ],
    checklist: [
      "Open doors on laundry and dish equipment",
      "Existing floor line under base cabinets",
      "A landing area for cleaning supplies"
    ],
    faqs: [
      {
        question: "Can a dishwasher move away from the laundry door?",
        answer: "Possibly. We look at the sink connection, cabinet widths and nearby drawers together so the new position improves both access and cleanup."
      },
      {
        question: "Should kitchen and laundry flooring match?",
        answer: "Consider cleaning and the sightline first. A matching finish may look continuous, while a defined transition can keep replacement work inside the room you planned to renovate."
      },
      {
        question: "Where can I put a basket that stays out of the way?",
        answer: "Check the wall beyond open appliance doors. A narrow surface there can handle a load of laundry without using the food prep counter."
      }
    ],
    guide: {
      nearby: [
        "severn",
        "hanover",
        "dundalk",
        "essex"
      ],
      pricingNote: "Keeping the sink and laundry connections reduces one set of changes. Compare the cost of an in-place remodel with any separate work for a pocket door or a continuous floor.",
      examples: [
        {
          title: "A basket landing clear of the sink",
          description: "A short counter along the laundry route could hold a basket without covering the kitchen prep surface. The storage beneath might hold cleaning supplies separate from pantry items."
        },
        {
          title: "A washable transition that stops at the hall",
          description: "New flooring could end where an existing doorway defines the change in material. The profile would be selected after comparing floor heights and seeing whether appliance removal needs more clearance."
        }
      ],
      sampleReviews: [
        "The dishwasher and laundry door both clear the aisle.",
        "We knew where the new flooring would stop."
      ]
    },
    cta: {
      title: "Show Us the Laundry Side of Your Glen Burnie Kitchen",
      description: "Photograph the laundry opening with nearby appliance doors open. Tell us where the cleanup routine gets interrupted today."
    }
  },

  {
    name: "Hanover",
    metaDescription: "Kitchen Remodeling in Hanover, MD. KrasPro measures townhome stairs and appliance doors, with island options and delivery requirements in writing.",
    introduction: "In a Hanover townhouse with the kitchen above the entry, the stairs are part of the kitchen plan. A refrigerator surround may fit beautifully between two walls and still be impossible to carry around the landing. We start at the curb and follow the route a cabinet will take.",
    focusTitle: "Why KrasPro measures the Hanover townhome stairs first",
    paragraphs: [
      "Where the kitchen opens onto the dining or living area, an island can be prep space, seating and the main place to set down a grocery bag. We check the edge you walk along coming up the stairs and leave room for people to move past stools when someone is unloading the dishwasher.",
      "Properties around Hanover can fall under different jurisdictions, and communities can have different rules for deliveries or outside changes. Share your ZIP code and property paperwork if you have it. Address-specific requirements can be checked before including an exterior vent or arranging a large delivery."
    ],
    checklist: [
      "Measurements through the staircase and landing",
      "Island seating and nearby appliance doors",
      "Delivery access and exterior design guidance"
    ],
    faqs: [
      {
        question: "Can full-height cabinets go up a switchback stair?",
        answer: "We need the stair and landing measurements and the assembled cabinet size. A two-piece design may be practical where a single tall unit cannot make the turn."
      },
      {
        question: "Do I need the exact island appliance models now?",
        answer: "Bring models before the cabinet order to verify ventilation, handles and door movement. The resulting drawing is a better guide for seating than a footprint alone."
      },
      {
        question: "Who should I ask about delivery restrictions?",
        answer: "Start with your association or building manager if one applies. Share dates and any access conditions before ordering items with narrow delivery windows."
      }
    ],
    guide: {
      nearby: [
        "severn",
        "glen-burnie",
        "columbia",
        "laurel"
      ],
      pricingNote: "A staged delivery or a countertop in more than one piece can change pricing upstairs. Compare the included handling and installation steps before choosing the cabinet line or slab size.",
      examples: [
        {
          title: "A smaller island that still seats two",
          description: "Turning the seats toward the living area could prevent them from spilling into the aisle beyond the stairs. A narrow cabinet below the prep surface would preserve everyday dish storage."
        },
        {
          title: "A refrigerator surround assembled upstairs",
          description: "Separate panels and an upper cabinet could be brought in independently where a tall unit would be too large. The design would leave room for the refrigerator doors and future replacement."
        }
      ],
      sampleReviews: [
        "The stairs were considered before we chose the pantry cabinet.",
        "The stools no longer sat in the main walkway."
      ]
    },
    cta: {
      title: "Send Us Your Hanover Kitchen Delivery Route",
      description: "Include the landing, narrowest doorway and a view back toward the seating area. Let us know which appliances are staying."
    }
  },

  {
    name: "Laurel",
    metaDescription: "Kitchen Remodeling in Laurel, MD. KrasPro checks access by address and plans pantry storage and clear entry routes before cabinets are ordered.",
    introduction: "A Laurel mailing address can cover different parts of central Maryland, and two houses with the same place name can be very different jobs. In one, an older first-floor kitchen may be reached through a short front hall. In another, the kitchen may open to a busy living area.",
    focusTitle: "Why KrasPro plans kitchen access by address in Laurel",
    paragraphs: [
      "We ask for the ZIP code, the way in from the street and photos of the corners most likely to hold new cabinets. That lets us sort questions about access and jurisdiction early. A homeowner who knows where to park, what walls stay and where cooking will happen can compare decisions more easily.",
      "Inside the room, we look for a place to stage groceries without losing food preparation space. A pantry close to the entry may work better than a deeper one beside the stove. We can compare both locations using the dimensions of appliances and cabinet doors you will actually use."
    ],
    checklist: [
      "Address and likely delivery route",
      "Landing counter next to dry storage",
      "Temporary cooking or coffee area"
    ],
    faqs: [
      {
        question: "Which jurisdiction applies to a Laurel address?",
        answer: "Use the full property address to identify the relevant authority. The proposed electrical, plumbing or structural scope determines which questions need follow-up."
      },
      {
        question: "Can we move in before the kitchen is ready?",
        answer: "Tell us your move date and the earliest you need basic food preparation. That timing can influence the cabinet order and when demolition makes sense."
      },
      {
        question: "What if the pantry door blocks the entry?",
        answer: "Test both open positions or send a sketch. Shallow drawers or a cabinet that opens from another side may preserve the passage."
      }
    ],
    guide: {
      nearby: [
        "columbia",
        "hanover",
        "college-park",
        "silver-spring"
      ],
      pricingNote: "A layout in the same footprint can have a simpler scope than relocating appliances. Ask for hauling, room protection and the temporary limits on kitchen use to be addressed in the quote.",
      examples: [
        {
          title: "An entry wall with a drop zone",
          description: "A low counter and shallow drawers near the passage could give bags a place to sit while groceries make their way to the cabinets. A warm light over the surface could make it usable after dark."
        },
        {
          title: "A first-floor kitchen remodeled in place",
          description: "Retaining the sink wall could leave funds for a better pantry and improved lighting. Cabinet drawings would check how a taller storage unit affects the view from the living room."
        }
      ],
      sampleReviews: [
        "The scope included how much of the first floor needed protection.",
        "The pantry door no longer blocked arrivals."
      ]
    },
    cta: {
      title: "Tell Us How You Enter Your Laurel Kitchen",
      description: "Send the property ZIP code and a sketch showing where you drop shopping bags. Name the change you want ready before your next busy week."
    }
  },

  {
    name: "Lutherville-Timonium",
    metaDescription: "Kitchen Remodeling in Lutherville-Timonium, MD. KrasPro compares wall openings, light and cabinet storage in a clear written scope for adjoining rooms.",
    introduction: "Before opening a wall, stand in the dining room and look back toward the kitchen. In Lutherville-Timonium, a mid-century house may have enough floor space for cooking but a narrow link to the room where everyone eats. How much of that wall to change is a design decision with practical consequences.",
    focusTitle: "Why KrasPro checks what a wall does in Lutherville-Timonium",
    paragraphs: [
      "We identify the storage, lighting controls and furniture that already depend on the wall. A wider opening might help people talk during meal prep, but it can also move switches and take away the only useful tall cabinet. We compare which jobs the wall does today before preparing options for its future.",
      "An opening also changes the view into the kitchen. Someone at the dining table may now see the sink and every appliance across the room. We include that sightline when deciding where the new lighting, trim and counter edges should stop."
    ],
    checklist: [
      "Which storage depends on the dividing wall",
      "Switches and other visible wall services",
      "Dining-room view of the cleanup area"
    ],
    faqs: [
      {
        question: "Can we tell from a photo if the wall carries load?",
        answer: "Photos help identify where to look. A site assessment is needed before making a structural decision or finalizing the demolition scope."
      },
      {
        question: "Would a partial opening be enough?",
        answer: "Mark the opening width with tape and sit at the table. Compare the resulting view and the storage you retain before asking for a wider plan."
      },
      {
        question: "Can the original dining trim stay?",
        answer: "It may be possible. We check where cuts and new casing will meet the existing pieces and describe those finish details in the scope."
      }
    ],
    guide: {
      nearby: [
        "towson",
        "pikesville",
        "phoenix",
        "owings-mills"
      ],
      pricingNote: "Price a cabinet-only update and a proposed opening separately. Opening a wall can involve structural evaluation, trade work and finishing in the adjacent room.",
      examples: [
        {
          title: "A wider connection with a retained cabinet wall",
          description: "A modest opening could improve the view across the two rooms while preserving space for dish storage. The proposed framing, trim and switch positions would be included in the comparison."
        },
        {
          title: "A lighting plan for two adjoining rooms",
          description: "Separate controls could let task lighting stay bright while dining lights dim. Aligning finish tones across the opening would make the kitchen and dining room feel related throughout the day."
        }
      ],
      sampleReviews: [
        "The drawing showed what we would lose along the old wall.",
        "We could light the kitchen without brightening the dining table."
      ]
    },
    cta: {
      title: "Compare Two Layouts for Your Lutherville-Timonium Kitchen",
      description: "Send one picture from the dining table and one from inside the kitchen. Circle the wall or doorway that makes the rooms feel disconnected."
    }
  },

  {
    name: "Mt. Airy",
    metaDescription: "Kitchen Remodeling in Mt. Airy, MD. KrasPro reviews equipment, pantry space and utility routes, with separate pricing for cabinets and trade work.",
    introduction: "An appliance drawing describes a box, and the room has to accommodate everything attached to that box. In a Mt. Airy kitchen, the preferred range wall or new sink position may be on the other side of the room from existing connections. We look at those routes alongside the pantry and cabinet plan.",
    focusTitle: "Why KrasPro plans the Mt. Airy kitchen by its connections",
    paragraphs: [
      "Bring appliance specifications and point out any utility details you already know, especially where the house uses fuel or systems that affect your choice of equipment. The actual property conditions matter. In the Mount Airy area, the town name alone will not settle which local questions apply to the proposed work.",
      "We also plan for space to stand while unloading, cooking and cleaning. A center island that replaces a table will feel different if the stools end up in the aisle to the garage. A floor sketch can make that visible before you give up the place you sit now."
    ],
    checklist: [
      "Equipment model numbers and connections",
      "Door and stool positions near the garage route",
      "Which utility questions the quote should address"
    ],
    faqs: [
      {
        question: "Do I need my fuel or electrical details at the first meeting?",
        answer: "Bring whatever you know and any appliance specifications. Existing equipment and the proposed models guide which utility conditions the team needs to review."
      },
      {
        question: "How much counter should go next to a range?",
        answer: "Consider your widest pan and the side you usually set it down on. We can compare cabinet lengths once the appliance dimensions and required clearances are known."
      },
      {
        question: "Can we keep a table and add a cabinet island?",
        answer: "Measure both in use, including pulled-out chairs. A movable cart may answer the prep need if fixed seating already occupies most of the space."
      }
    ],
    guide: {
      nearby: [
        "frederick",
        "westminster",
        "finksburg",
        "ellicott-city"
      ],
      pricingNote: "Compare a like-for-like equipment change with a layout that needs new connections. Ask for appliance allowances and any additional trade work to appear separately.",
      examples: [
        {
          title: "A range wall with a better landing counter",
          description: "Shifting a tall cabinet away from the range could free counter space for hot cookware while keeping the appliance on its existing wall. The cabinet plan would confirm the remaining storage and the chosen hood arrangement."
        },
        {
          title: "A pantry arranged for weekly shopping",
          description: "Shallow shelves could display dry food while one deeper bay holds large items. Placing the unit near the grocery entrance saves steps and separates unloading from the cooking aisle."
        }
      ],
      sampleReviews: [
        "The proposal separated cabinet work from the connection changes.",
        "The landing counter fits the pans we actually use."
      ]
    },
    cta: {
      title: "Bring Your Appliance Plans for Mt. Airy",
      description: "Send model numbers if you have them, plus a photo of the range wall and the route to the table. We can talk through the changes in order."
    }
  },

  {
    name: "Owings Mills",
    metaDescription: "Kitchen Remodeling in Owings Mills, MD. KrasPro checks island seating, pantry access and traffic, then prices cabinet and utility work separately.",
    introduction: "A kitchen island looks spacious before the stools arrive and the dishwasher opens. In an Owings Mills townhouse or single-family home, we measure what is left of the aisle in those everyday conditions. The aim is to make preparation, homework and cleanup fit at the same time.",
    focusTitle: "Why KrasPro sizes an Owings Mills island around how you use it",
    paragraphs: [
      "Start with what must live in the island. A base for heavy pans has different needs than a countertop for homework or a place for a microwave drawer. We compare depth, overhang and what utilities the island would require, then use those choices to test whether a peninsula would serve the room better.",
      "We also look at the food storage around it. If the pantry opens into the main cooking lane, adding a large structure nearby may make the entry tighter. A drawing can show the pantry door and other open doors before you decide whether to shift a cabinet or give the island a shorter end."
    ],
    checklist: [
      "Aisle with stools pulled out",
      "Access to the pantry and dishwasher",
      "Storage and utilities actually needed in the island"
    ],
    faqs: [
      {
        question: "How do I know whether an island will be too big?",
        answer: "Mark it on the floor and put chairs where you plan to sit. Try the usual routes from the pantry and open the nearest appliances while someone stands at the counter."
      },
      {
        question: "Can I add seating to an existing cabinet base?",
        answer: "Have the cabinet, countertop and support requirements reviewed together. The appropriate overhang depends on the materials and room available."
      },
      {
        question: "Does an island sink make prep easier?",
        answer: "It can if it serves a distinct prep area. Compare the extra connections and space under the counter with how far you already walk to the main sink."
      }
    ],
    guide: {
      nearby: [
        "reisterstown",
        "pikesville",
        "finksburg",
        "lutherville-timonium"
      ],
      pricingNote: "Cabinet depth, seating support and appliance connections can change an island budget. Compare a prep-only layout with the same island equipped with a sink or microwave.",
      examples: [
        {
          title: "A shorter island with a pantry route",
          description: "Stopping the island one cabinet sooner could keep the walkway open beyond the dishwasher. A pantry drawer on the end facing the entry could give shopping bags a direct destination."
        },
        {
          title: "A stable prep area for two cooks",
          description: "One person could use the longest counter for baking while another works at the sink. Drawers with common utensils would sit where both cooks reach them without crossing behind the range."
        }
      ],
      sampleReviews: [
        "We tested the pantry route with the stools pulled out.",
        "The island price showed which connections were included."
      ]
    },
    cta: {
      title: "Try the Island Footprint in Your Owings Mills Kitchen",
      description: "Tape the shape on the floor, open the dishwasher and pull out two chairs. Send a photo from the spot that feels tightest."
    }
  },

  {
    name: "Parkton",
    metaDescription: "Kitchen Remodeling in Parkton, MD. KrasPro plans pantry storage and counter delivery around the property, with a written scope for daily meal prep.",
    introduction: "A kitchen remodel in northern Baltimore County can depend on the last few yards of the driveway. In a Parkton house with a longer approach, bring us into the room the same way a crew would carry a pantry cabinet. The slope, weather and step at the entrance can all shape delivery day.",
    focusTitle: "Why KrasPro starts outside before remodeling a Parkton kitchen",
    paragraphs: [
      "Inside, we ask what you keep on hand between shopping trips. The best pantry for large dry goods may also need a place for baking pans and small appliances. We plan shelves of different depths and mark the pieces that need to be removed without taking everything off the shelf.",
      "We also discuss how to keep meals going while the kitchen is unavailable. For a household that relies on its own kitchen most nights, a nearby temporary prep area can be more valuable than starting demolition early. We coordinate that discussion with ordering cabinets and any work needed before the room can reopen."
    ],
    checklist: [
      "Driveway access in wet or cold weather",
      "Shelf heights for bulk items and small appliances",
      "A temporary prep area within the house"
    ],
    faqs: [
      {
        question: "What if a delivery truck cannot use the driveway?",
        answer: "Send photos and note any known limits. Review whether there is a practical transfer point before ordering large cabinets or countertops."
      },
      {
        question: "Can I cook at home during the work?",
        answer: "Plan for periods when the room and its connections are unavailable. We discuss a feasible temporary setup and align the schedule with when equipment should arrive."
      },
      {
        question: "Will custom shelving make better use of the pantry?",
        answer: "It can help when storage needs vary in depth or height. Bring dimensions of the items that already cause trouble before comparing it with adjustable stock units."
      }
    ],
    guide: {
      nearby: [
        "sparks",
        "phoenix",
        "lutherville-timonium",
        "bel-air"
      ],
      pricingNote: "Include any extra delivery handling and the size of the pantry build in your comparison. Keeping the plumbing in place can free up room for storage upgrades.",
      examples: [
        {
          title: "Bulk storage that stays visible",
          description: "A pantry wall could hold heavy items near the bottom and everyday dry food at eye level. Adjustable shelves in a shallow section would keep packages within reach."
        },
        {
          title: "A countertop delivered in shorter pieces",
          description: "A long prep run could be designed with a joint that works with the cabinet layout and the approach to the house. The fabricator would review both the handling route and where you usually work."
        }
      ],
      sampleReviews: [
        "The delivery plan included the wet-weather approach.",
        "Bulk items stayed handy without burying everyday groceries."
      ]
    },
    cta: {
      title: "Start With the Approach to Your Parkton Kitchen",
      description: "Send a view of the driveway from the delivery end and a picture of the current pantry. Tell us what you want to keep within reach."
    }
  },

  {
    name: "Phoenix",
    metaDescription: "Kitchen Remodeling in Phoenix, MD. KrasPro plans baking storage, yard-side entry and prep routes, with layout and finishes explained in writing.",
    introduction: "A door to the yard does more work in some Phoenix kitchens than the door to the front hall. On a northern Baltimore County property, it might carry muddy shoes, produce and guests on the same afternoon. We start by figuring out what needs to cross the prep area and what can stay at its edge.",
    focusTitle: "Why KrasPro separates baking and yard traffic in Phoenix",
    paragraphs: [
      "Baking equipment can claim a deep corner that no one else uses well. We ask you to lift out a mixer or a bin of flour the way you do now. That one movement tells us more about counter height, outlet access and lower storage than listing every cabinet you want to replace.",
      "We measure the room for paths people can share, including a route to the refrigerator that bypasses the range. Then we include panel finishes and the flooring edge where outside traffic enters. The room should function in muddy spring weather as well as it does on a clear day."
    ],
    checklist: [
      "Prep route from garden door to sink",
      "Mixer dimensions and outlet access",
      "Refrigerator swing during gatherings"
    ],
    faqs: [
      {
        question: "Where can I dry vegetables without losing my prep counter?",
        answer: "Consider a defined landing surface near the sink. We compare its depth and height with how you already wash and sort food from outside."
      },
      {
        question: "Should outlet locations follow the appliance list?",
        answer: "Yes. Identify stationary and movable equipment before the electrical review. A mixer that stays out has different needs from an infrequently used appliance stored in a drawer."
      },
      {
        question: "Can the yard door stay in the same position?",
        answer: "Usually a layout comparison can start there. Test the movement of the door and nearby cabinets with the heaviest traffic in mind."
      }
    ],
    guide: {
      nearby: [
        "sparks",
        "parkton",
        "lutherville-timonium",
        "bel-air"
      ],
      pricingNote: "A layout that moves one bank of storage can improve access without changing the range connections. Include work at the yard threshold if cleanup or damaged finishes are part of the reason for remodeling.",
      examples: [
        {
          title: "A dedicated baking surface",
          description: "A lower counter at one end of the room could keep the mixer and rolling space together. A drawer close by could hold pans vertically and reduce trips through the main cooking aisle."
        },
        {
          title: "A garden-side landing",
          description: "A tough landing surface beside the yard door could hold produce without putting it on the stove-side prep counter. Easy-to-clean storage below could hide bags and shoes while a clear path remains to the sink."
        }
      ],
      sampleReviews: [
        "We use the mixer without carrying it across the room.",
        "There is a clear place for produce from the yard."
      ]
    },
    cta: {
      title: "Show Us the Working Corners of Your Phoenix Kitchen",
      description: "Take one photo by the outside door and one where you bake. Note which equipment stays out and where visitors usually stand."
    }
  },

  {
    name: "Pikesville",
    metaDescription: "Kitchen Remodeling in Pikesville, MD. KrasPro plans distinct prep and storage zones, with appliance details and options compared in a written scope.",
    introduction: "Two kitchens with the same floor area can require very different storage. In Pikesville, a household may want distinct sets of utensils, multiple prep zones or more room to serve family meals. We ask what you need to keep together or apart before talking about a cabinet style.",
    focusTitle: "Why KrasPro starts with household routines in Pikesville",
    paragraphs: [
      "List the pots, dishes and small equipment you use regularly, especially if you want more than one cleanup or prep station. That helps us map storage and check how drawers and appliance doors interact. A wall elevation can show useful separation where a floor plan makes everything look close together.",
      "When planning utilities, we review the room available around each proposed appliance and compare a modest cabinet change with changes involving extra trade work. The goal is a written scope where the preparation routine is visible and the items that drive the cost are easy to identify."
    ],
    checklist: [
      "Appliances and dishes for each prep area",
      "Separation between busy cleanup stations",
      "Door clearance and access to controls"
    ],
    faqs: [
      {
        question: "Can we draw up two prep areas in a smaller room?",
        answer: "Yes, start with your daily tasks and appliance sizes. We check how much clear work surface and circulation each area needs before deciding whether the room can support both."
      },
      {
        question: "What should I bring for a second sink?",
        answer: "Bring its preferred location, intended use and approximate size. Existing connections and space inside the cabinet matter to the trade review."
      },
      {
        question: "How do we organize cookware that rarely moves?",
        answer: "Group it by where it is used and measure the heaviest pieces. Drawer hardware and shelf dimensions should suit the contents before ordering cabinets."
      }
    ],
    guide: {
      nearby: [
        "owings-mills",
        "lutherville-timonium",
        "reisterstown",
        "towson"
      ],
      pricingNote: "Pricing can change with additional sinks, extra appliances or tall cabinet storage. Break each option into its cabinet, countertop and utility portions before committing to the layout.",
      examples: [
        {
          title: "Parallel prep counters with distinct drawers",
          description: "Two stretches of counter could support separate routines during the same meal. Storage at each worktop would be sized around its cookware, with a practical route for serving dishes."
        },
        {
          title: "A serving cabinet near the dining side",
          description: "Flatware and plates could move to the wall closest to the table, freeing drawers by the range. Repositioned storage would make it easier to set the table while someone cooks."
        }
      ],
      sampleReviews: [
        "The plan showed exactly which utensils went where.",
        "Two people could finish dinner without sharing one drawer."
      ]
    },
    cta: {
      title: "Give Us Your Pikesville Kitchen Routine",
      description: "Write down what you prepare at each station and what needs a separate home. Include model numbers or dimensions for anything you plan to keep."
    }
  },

  {
    name: "Reisterstown",
    metaDescription: "Kitchen Remodeling in Reisterstown, MD. KrasPro scopes cabinets and rear access around the woodwork and flooring you want to preserve in the room.",
    introduction: "Some of the best features of an older Reisterstown kitchen are the ones you hardly notice until you imagine taking them out. A solid back door, a deep sill or a band of original floorboards can set the layout and the character of the new room.",
    focusTitle: "Why KrasPro asks what to save in a Reisterstown kitchen",
    paragraphs: [
      "We walk the boundary between the proposed work and the surfaces you want to keep. If a cabinet stops just before a deep casing, that junction needs a drawing as much as the center of the room does. We also compare how a new backsplash will end beside the retained opening.",
      "In a newer subdivision house, there may still be a good reason to keep parts of a recent update. If the floor or an appliance has years left, we measure its position before committing to a cabinet footprint. The estimate can account for protection and any extra fitting where old and new surfaces meet."
    ],
    checklist: [
      "Features to protect before work starts",
      "Floor or tile hidden by the existing cabinets",
      "New hardware beside original door trim"
    ],
    faqs: [
      {
        question: "Can old floorboards survive cabinet removal?",
        answer: "Their condition and how the boxes are fastened both matter. We inspect the visible floor and discuss what may be found beneath the old run."
      },
      {
        question: "How do I keep a meaningful original feature?",
        answer: "Take a photo and tell us why it matters to you. We can mark it to protect and plan the new edges or hardware around it."
      },
      {
        question: "Should I keep an appliance from the last remodel?",
        answer: "If it works for your routine, bring its size and installation details. The replacement cabinets should leave enough access to service it later."
      }
    ],
    guide: {
      nearby: [
        "owings-mills",
        "finksburg",
        "pikesville",
        "lutherville-timonium"
      ],
      pricingNote: "Keeping a sound finish can reduce replacement. Include the time for careful removal, repair or fitting in the scope so it can be compared with a full replacement.",
      examples: [
        {
          title: "An older wood door framed by simpler cabinets",
          description: "A contemporary cabinet run could stop short of the existing back-door casing, leaving the woodwork readable. The backsplash edge would follow the cabinet rather than crowd the doorway."
        },
        {
          title: "A pantry built into an underused corner",
          description: "Shallow adjustable shelves could replace a cabinet that hid items in the back. Sketching the new depth against the existing flooring would show where a small repair is needed."
        }
      ],
      sampleReviews: [
        "The backsplash stopped cleanly at the old doorway.",
        "We saved the floor and knew where the cabinet change needed a repair."
      ]
    },
    cta: {
      title: "Choose What Stays in Your Reisterstown Kitchen",
      description: "Photograph the feature you would miss if it were gone. Tell us what frustrates you most about the room you use today."
    }
  },

  {
    name: "Rockville",
    metaDescription: "Kitchen Remodeling in Rockville, MD. KrasPro checks appliance doors, cabinet fit and delivery access, with an itemized scope for finishes and trade work.",
    introduction: "A refrigerator can fit inside a cabinet opening and still refuse to give up its lowest drawer. We see the same kind of planning question when reviewing either a Rockville condo kitchen or a detached Montgomery County home. The measurements that matter are the ones you need while the equipment is in use.",
    focusTitle: "Why KrasPro tests every appliance door in a Rockville kitchen",
    paragraphs: [
      "We check how doors meet nearby walls, knobs or neighboring drawers and mark what happens if two appliances are opened together. A small filler panel can be more valuable than a sliver of extra cabinet space if it allows the refrigerator to open all the way.",
      "For an upper-floor kitchen, we make sure the pieces and their packaging can travel from the delivery point. Bring any building requirements for reserved time, elevator use and protection. Those details can guide cabinet size and let us compare parts of a layout that are assembled in the room with items delivered whole."
    ],
    checklist: [
      "Actual appliance model dimensions",
      "Open doors and storage bins at full extension",
      "Delivery opening and elevator dimensions where relevant"
    ],
    faqs: [
      {
        question: "What width do I give you for the refrigerator?",
        answer: "Send the model number and a photo of the intended wall. Manufacturer information and the space available for the doors are both needed to check the fit."
      },
      {
        question: "Could I use taller storage with a small elevator?",
        answer: "Compare the panel and cabinet dimensions with every turn along the route. Separate upper units can sometimes give the same finished look in smaller pieces."
      },
      {
        question: "Should I order cabinet hardware before the layout?",
        answer: "Choose it when the door and drawer locations are known. Long pulls near corners can interfere with neighboring handles."
      }
    ],
    guide: {
      nearby: [
        "bethesda",
        "silver-spring",
        "college-park",
        "frederick"
      ],
      pricingNote: "List panels and unusually sized fillers separately when comparing estimates. Include access protection and delivery requirements if the work affects shared areas.",
      examples: [
        {
          title: "A fridge that opens beside a short return",
          description: "A smaller panel and a shift in the adjacent cabinet could make room for the refrigerator to swing open. That would allow full access to the produce drawers without moving the appliance into the middle of the room."
        },
        {
          title: "A low microwave that clears the aisle",
          description: "A microwave drawer could preserve countertop space in a condo kitchen. The drawing would check the path from the island to the sink with the drawer open."
        }
      ],
      sampleReviews: [
        "The fridge drawers slide out without moving the cabinet door.",
        "We had the elevator dimensions before selecting panels."
      ]
    },
    cta: {
      title: "Send the Rockville Appliance That Gives You Trouble",
      description: "Show it with the door or drawers open. Include your replacement model if you have chosen it and any delivery requirements for your property."
    }
  },

  {
    name: "Severn",
    metaDescription: "Kitchen Remodeling in Severn, MD. KrasPro plans garage-side storage and meal prep, with clear cabinet allowances and pricing for flooring transitions.",
    introduction: "The door between a garage and the kitchen often sets the rhythm for the whole room. In a Severn house with an attached garage, someone carrying groceries can need the same patch of floor as someone setting the table. We map that moment before moving an island or a pantry.",
    focusTitle: "Why KrasPro maps the Severn kitchen from garage to table",
    paragraphs: [
      "A bulky cabinet beside the entry might hold plenty while leaving no place to set a bag. We compare a lower cabinet topped with a landing surface against a pantry that uses the full wall height. Once the landing area is located, we test how far it is from both the refrigerator and the cooking counter.",
      "Where several rooms share one floor finish, we check what will show if an island or tall cabinet moves. That includes looking for a stopping point you will be happy with beyond the kitchen. The quote can list floor patching as an option if keeping the rest of the surface is important."
    ],
    checklist: [
      "Garage door movement and the aisle to the table",
      "Drop zone beside dry and cold storage",
      "Existing floor beneath movable cabinetry"
    ],
    faqs: [
      {
        question: "Can a niche just inside the garage door take a pantry?",
        answer: "Give us the depth and show how the door opens. We can compare shelves and drawers for access while groceries are being carried inside."
      },
      {
        question: "Will cabinets cover an old island mark?",
        answer: "It depends on the new footprint and condition of the floor. We compare patching, keeping the island in place or refinishing a defined portion before finalizing the layout."
      },
      {
        question: "Where can kids eat without blocking cooking?",
        answer: "Test a seating area away from the garage and sink routes. Use a chair or stool in the proposed spot before committing to the cabinet dimensions."
      }
    ],
    guide: {
      nearby: [
        "hanover",
        "glen-burnie",
        "laurel",
        "columbia"
      ],
      pricingNote: "Cabinet and counter choices drive the initial budget. An enlarged footprint can bring floor repairs or longer finish transitions into the scope, even when you keep the appliances.",
      examples: [
        {
          title: "A drop counter beside the garage door",
          description: "A base cabinet with drawers could hold shopping bags underneath a short landing counter. Keeping tall storage farther into the room would preserve the view along the path to the table."
        },
        {
          title: "An island with a protected walking end",
          description: "Taking seating off the garage side could clear a busy corner. The remaining stools would face the living area, where people can sit without sharing the grocery route."
        }
      ],
      sampleReviews: [
        "We found a place for bags without using the range counter.",
        "The flooring repair was broken out from the cabinets."
      ]
    },
    cta: {
      title: "Take Us From the Garage to Your Severn Kitchen",
      description: "Send photos from the door, the island and the dining side. Mark where people get in one another's way when you bring groceries in."
    }
  },

  {
    name: "Silver Spring",
    metaDescription: "Kitchen Remodeling in Silver Spring, MD. KrasPro plans compact storage and appliance fit for condos and older homes, with building access in the scope.",
    introduction: "The best storage upgrade in a small kitchen may be getting a bulky appliance off the only useful counter. In Silver Spring, that can be a question in a condo or an older detached house. We ask what you use at breakfast and what stays out simply because putting it away takes too many steps.",
    focusTitle: "Why KrasPro matches storage to a Silver Spring kitchen's footprint",
    paragraphs: [
      "We compare shallow pantry shelves, appliance cabinets and drawer bases against the path between the sink and range. Bring the dimensions of objects that tend to live on the counter. Those details can make room for a longer stretch of prep space without moving the plumbing.",
      "In a multistory building, we check what can come through the elevator and unit door and whether outside connections or work hours are subject to building review. In a detached house, the limiting detail may be a side door or a turn beyond the front hall. Either belongs in the plan from the start."
    ],
    checklist: [
      "Appliances that live on the countertop",
      "A clear span for chopping and prep",
      "Building access and proposed duct routes"
    ],
    faqs: [
      {
        question: "Can the microwave move off the counter?",
        answer: "Yes, if the new position suits the appliance and ventilation requirements. Bring its specifications and show which cabinet walls you are open to changing."
      },
      {
        question: "Should a condo kitchen plan include building approvals?",
        answer: "Include applicable building procedures for shared areas and any proposed work that affects the building. Ask about review timing before scheduling delivery."
      },
      {
        question: "Is a shallow pantry useful for full-size dishes?",
        answer: "It depends on the shelf depth and plate diameter. Check your dishes against the actual cabinet interior and save the deeper space for larger cookware."
      }
    ],
    guide: {
      nearby: [
        "bethesda",
        "rockville",
        "college-park",
        "laurel"
      ],
      pricingNote: "Custom compact storage can cost more per cabinet than standard depths. Compare it with keeping the existing footprint and put any delivery or ventilation work on its own line.",
      examples: [
        {
          title: "A coffee cabinet with room for breakfast",
          description: "Daily mugs and equipment could share a cabinet near the dining side, with enough room to pull the machine forward for use. That would leave the main counter available for food prep."
        },
        {
          title: "Room for a useful drawer bank",
          description: "Replacing a deep corner by the entry with easier-to-open drawers could make everyday tools visible. Tall storage would move away from the narrowest part of the doorway."
        }
      ],
      sampleReviews: [
        "We cleared a whole stretch of prep counter.",
        "The quote accounted for protecting the shared hallway."
      ]
    },
    cta: {
      title: "Show Us What Stays on Your Silver Spring Counter",
      description: "List the small appliances you reach for each day and share a photo of the doorway into the room. We can use both to compare storage options."
    }
  },

  {
    name: "Sparks",
    metaDescription: "Kitchen Remodeling in Sparks, MD. KrasPro plans Sparks kitchens around food storage, serving and cleanup, with clear options for island size and material delivery.",
    introduction: "After a gathering, the kitchen tells you which route works and which one never did. In a Sparks home with space for a long table or outdoor seating, serving trays can pile up near the sink and block the very counter used for cleanup. We plan both trips from the table.",
    focusTitle: "Why KrasPro plans where food lands and dishes return in Sparks",
    paragraphs: [
      "We ask what you serve in the kitchen and what you carry outdoors or to another room. A door close to the range can make an island a traffic divider, while a serving cabinet toward the table can pull guests away from the prep side. We compare both moves before adding a sink or changing the range.",
      "We also measure the serving pieces that rarely fit in standard cabinets. A few vertical dividers may make more room than another row of upper doors. If the approach to the house is long, the largest cabinet sections and worktop pieces should be chosen with delivery in mind."
    ],
    checklist: [
      "Route from table to sink after meals",
      "Height and width of trays and platters",
      "Largest counter piece and approach to the kitchen"
    ],
    faqs: [
      {
        question: "Is a second dishwasher worth planning for?",
        answer: "Consider how often the first one fills and where dishes wait. Improved loading space may be enough, or we can review the connections and cabinet footprint needed for another unit."
      },
      {
        question: "How much island seating can we fit?",
        answer: "Test how guests actually move around the room. Use temporary stools in the proposed positions and check the route to the dining table with the dishwasher open."
      },
      {
        question: "Can we store platters vertically?",
        answer: "Yes when their height and edges work with the dividers. Bring dimensions so the cabinet layout allows pieces to be removed without scraping doors."
      }
    ],
    guide: {
      nearby: [
        "phoenix",
        "parkton",
        "lutherville-timonium",
        "bel-air"
      ],
      pricingNote: "A serving run with no plumbing can cost less to install than an island with utilities. Check the cabinet interiors, countertop area and any changes to lighting in each option.",
      examples: [
        {
          title: "A side counter for coffee and serving",
          description: "A separate cabinet run could let guests reach mugs and plates on their way to the dining room. It would free the nearest stretch of the main counter for dishes returning to the sink."
        },
        {
          title: "Vertical storage for trays and boards",
          description: "A divided base cabinet facing the prep side could make each piece easier to grab. Deep platters would stay near the serving counter so heavy dishes travel a shorter distance."
        }
      ],
      sampleReviews: [
        "The guest side had its own place for plates.",
        "We could get to the sink after dinner without moving serving dishes."
      ]
    },
    cta: {
      title: "Map Dinner Service in Your Sparks Kitchen",
      description: "Share where people sit, where dishes come back and which platters are hardest to store. We can use that routine to compare layouts."
    }
  },

  {
    name: "Towson",
    metaDescription: "Kitchen Remodeling in Towson, MD. KrasPro scopes better prep lighting, storage and doorway options around the trim and floors you want to keep.",
    introduction: "Look toward the kitchen from the hall before you decide to take out a cabinet. In a Towson house with separate rooms, that view may include a window, a narrow door and the darkest stretch of counter. We work through what changing each of those edges would do for the rest of the floor.",
    focusTitle: "Why KrasPro reviews the Towson kitchen from the neighboring room",
    paragraphs: [
      "Existing casing or hardwood can give us a useful stopping point for the remodel. We check whether the daylight reaches the prep area and ask where you find yourself working in shadow. Task lighting and a better position for drawers can change the way the room feels while letting the old doorway stay.",
      "Where a homeowner is considering a wider passage, we discuss what an opening could mean for structure, wiring, trim and flooring before settling on a cabinet quote. Seeing what is covered and what needs to be reviewed makes it easier to compare with a plan that keeps the doorway."
    ],
    checklist: [
      "Prep areas with shadows at night",
      "Doorway trim and old floor edges",
      "Items attached to the proposed opening wall"
    ],
    faqs: [
      {
        question: "Do I need to change the ceiling to improve lighting?",
        answer: "Bring nighttime photos and tell us what tasks are hardest to see. Some layouts can benefit from under-cabinet lights while keeping the existing ceiling."
      },
      {
        question: "Can I preserve an old doorway and still add storage?",
        answer: "Often a shorter or shallower cabinet at the edge can give it room. We check drawer clearance beside the casing and leave space for the detail you intend to keep."
      },
      {
        question: "What should I compare in two doorway quotes?",
        answer: "Look for the assessment, any wall and trade work, flooring repair and whether painting or trim extends into the next room."
      }
    ],
    guide: {
      nearby: [
        "lutherville-timonium",
        "pikesville",
        "baltimore",
        "phoenix"
      ],
      pricingNote: "A lighting and cabinet update has a different cost profile from altering the doorway. Ask for the adjacent room's finish repairs to be identified in the estimate if an opening is proposed.",
      examples: [
        {
          title: "A brighter counter that keeps the doorway",
          description: "New under-cabinet lights and a shorter upper unit could improve visibility near an old window. Leaving the existing casing would preserve the view from the hall."
        },
        {
          title: "A small opening aligned with the table",
          description: "Widening the passage by a modest amount could improve serving access while retaining a useful cabinet wall. The plan would show how floorboards and trim come together at the opening."
        }
      ],
      sampleReviews: [
        "We kept the trim and finally had good light at the prep counter.",
        "The doorway option showed the effect on the dining room floor."
      ]
    },
    cta: {
      title: "Send a Towson Kitchen Photo After Dark",
      description: "Include the darkest counter and a daylight picture from the adjoining room. Tell us whether saving the existing doorway is a priority."
    }
  },

  {
    name: "Westminster",
    metaDescription: "Kitchen Remodeling in Westminster, MD. KrasPro measures cabinet fit and storage, with floor repairs and retained finishes scoped before ordering.",
    introduction: "An older Westminster kitchen can tell the story of several renovations at once. The floor may change under a pantry, a window may be at a different height from its neighbor, and a newer appliance may sit in a space built for a smaller one. We use those clues to decide what to measure first.",
    focusTitle: "Why KrasPro looks behind the cabinet line in Westminster",
    paragraphs: [
      "In Carroll County's older houses and newer family homes alike, we check the places where work will join the room that stays. A doorway into the dining room may offer a clear line for new flooring, while an exposed cabinet end may need a panel that can handle daily bumps and cleaning.",
      "If the scope includes removing a former cabinet or appliance platform, we talk about what can be seen before demolition and what should be assessed after it opens up. That includes a practical conversation about cabinet fillers, patching and whether you want alternates for keeping a useful wall or shelf."
    ],
    checklist: [
      "Changes in floor height across the room",
      "Appliance width compared with old openings",
      "Home features and finishes that should remain"
    ],
    faqs: [
      {
        question: "How do I price what might be under a cabinet?",
        answer: "Ask the proposal to identify available information and a process for any newly visible repairs. Photos of gaps or earlier work can help narrow the questions before demolition."
      },
      {
        question: "Can a newer range use the old opening?",
        answer: "Compare the appliance specifications with the finished opening and nearby doors. We check clearances and connections before finalizing cabinet sizes."
      },
      {
        question: "Should I match the flooring to the dining room?",
        answer: "Consider how the surfaces meet and how the kitchen gets cleaned. A deliberate joint can work whether you choose a close match or a distinct kitchen finish."
      }
    ],
    guide: {
      nearby: [
        "finksburg",
        "mt-airy",
        "frederick",
        "reisterstown"
      ],
      pricingNote: "A finish allowance is easier to compare when preparation is separate. Look for cabinet fitting, floor patching and any repair allowances tied to the surfaces that will be opened.",
      examples: [
        {
          title: "A full-height pantry beyond a low window",
          description: "A tall cabinet could fit on the quieter side of the doorway, leaving the lower window open to the kitchen. Shallow shelves would help it hold commonly used food without crowding the way in."
        },
        {
          title: "A new floor stopping at an older threshold",
          description: "Replacement flooring could meet the dining-room boards at a defined line under the open doorway. The layout would settle which direction the seams run before choosing a transition."
        }
      ],
      sampleReviews: [
        "The estimate spelled out the existing floor and the proposed repair.",
        "Our tall pantry fits without taking light from the window."
      ]
    },
    cta: {
      title: "Tell Us the Story of Your Westminster Kitchen",
      description: "Show us which parts were changed before and where the floor or wall finishes meet. Tell us what you hope to keep through the next remodel."
    }
  },
] satisfies KitchenCity[];
