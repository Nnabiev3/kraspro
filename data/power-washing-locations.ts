import type { ServiceLocation } from "./service-locations";

type CityCopy = Omit<ServiceLocation, "serviceSlug" | "locationSlug" | "status" | "title" | "guide" | "cta">
  & Required<Pick<ServiceLocation, "guide" | "cta">>
  & { name: string };

export const powerWashingCities = [
  {
    name: "Baltimore",
    introduction: "On a Baltimore rowhouse, the front steps and the rear patio can call for entirely different cleaning plans. Show us what each surface is made of, where the discoloration starts and how we can get to each side of the house. We will scope the front and back individually.",
    metaDescription: "Baltimore Power Washing for brick rowhouses, entry steps and rear patios. KrasPro checks masonry, finishes and rowhouse access before preparing a written quote.",
    focusTitle: "Why Baltimore rowhouses need a surface-by-surface plan",
    paragraphs: [
      "Brick, painted trim and a concrete stoop can sit within a few feet of each other. We look at the mortar joints and existing paint first, then consider how to work along adjoining walls and keep the public approach passable. Weathered mortar deserves inspection before the brick goes into the scope.",
      "A rear courtyard can add a separate access problem. Mention whether the route is through an alley, a shared gate or the house. A picture of the corner where the court meets the back wall helps explain how much room we have to work.",
    ],
    checklist: ["Front stoop and mortar condition", "Rear access through a shared alley", "Neighboring doors and windows"],
    faqs: [
      {
        question: "Can you wash old brick on a Baltimore rowhouse?",
        answer: "We check the brick and mortar before including them. Powdering brick, open joints or previous patching can change which cleaning approach is appropriate.",
      },
      {
        question: "Can the front steps be washed by themselves?",
        answer: "Ask for the stoop and landing as a separate item. Take a photo from the sidewalk that shows where the steps meet the wall and pavement.",
      },
      {
        question: "What if the back is reachable only from the alley?",
        answer: "Show the gate and alley entrance. Hose routing and the position of neighboring doors help determine what setup works.",
      },
    ],
    guide: {
      nearby: ["dundalk", "essex", "catonsville", "towson"],
      pricingNote: "A clear front stoop takes less setup than two surfaces reached separately. Ask for the front steps and courtyard to be listed individually.",
      examples: [
        {
          title: "Brick rowhouse entry",
          description: "Traffic grime collects on a concrete landing below old brick. A possible scope would wash the landing and inspect the adjoining mortar separately. The homeowner could review the line where the work would stop at a neighbor's steps before booking.",
        },
        {
          title: "Alley-facing courtyard",
          description: "A rear paved courtyard stays shaded between buildings. The quote could cover the paving and review drainage before scheduling the wash. Gate width and a clear route to the work may matter more than the total lot size.",
        },
      ],
      sampleReviews: [
        "The scope showed how the crew would reach the back without using the hallway.",
        "We could see which joints needed attention before booking the stoop wash.",
      ],
    },
    cta: {
      title: "Show Us Both Sides of Your Rowhouse",
      description: "Send one photo from the sidewalk and one from the back entrance. Tell us which surface matters most so we can define the first phase.",
    },
  },
  {
    name: "Bel Air",
    introduction: "After pollen season in Bel Air, a front porch can look fine while the shaded siding behind shrubs holds a green film. Start with the wall or walk you notice each day. We consider the finish, the plants at its base and the way people approach the house.",
    metaDescription: "Power Washing in Bel Air for shaded siding, front porches and garden walks. KrasPro inspects surface finishes and outlines the work in a written project quote.",
    focusTitle: "Why we check what grows close to your Bel Air house",
    paragraphs: [
      "Harford County yards can put dense shrubs against an exterior wall. When air moves slowly behind a bed, moisture can linger on the lower siding. We ask which areas stay damp and where there is room to approach the wall without moving through a dense planting.",
      "On a covered porch, the tread may be an entirely different finish from the painted riser. Tell us if you repainted recently or see peeling along the steps. A picture under the doormat often shows a different condition from the boards at the outer edge.",
    ],
    checklist: ["Plant beds beneath siding", "Porch tread and riser finishes", "Room to work around shrubs"],
    faqs: [
      {
        question: "When should I request a wash after the spring pollen?",
        answer: "For pollen alone, consider asking once the heaviest shedding has passed. Tell us sooner if there is a slick spot on the steps.",
      },
      {
        question: "Does a siding quote automatically cover each wall?",
        answer: "Name the affected elevations and tell us whether you want the whole exterior reviewed. A limited scope can be discussed.",
      },
      {
        question: "Does the front porch need to be emptied?",
        answer: "Move small planters, cushions and seasonal decorations if practical. Mention heavy or fixed pieces so the scope accounts for reachable areas.",
      },
    ],
    guide: {
      nearby: ["phoenix", "sparks", "parkton", "towson"],
      pricingNote: "Request a separate price for the porch if the siding is your priority. Closely planted borders and a second story can add setup.",
      examples: [
        {
          title: "Film behind foundation shrubs",
          description: "For a detached home with vinyl siding beside a planted bed, an example scope would inspect the wall and protect the garden edge before cleaning the affected elevation. Upper trim where the discoloration stops could be priced as an option.",
        },
        {
          title: "Porch and garden walk",
          description: "A porch floor and path to the driveway both look gray after spring. The walk could be washed on its own while painted porch boards are reviewed for coating wear. The owner can choose a smaller first visit.",
        },
      ],
      sampleReviews: [
        "We knew what to clear from the garden bed before the visit.",
        "Seeing the porch separately helped us decide what to do first.",
      ],
    },
    cta: {
      title: "Start With the Wall That Stays Shaded",
      description: "Send a Bel Air photo showing the discoloration and the garden below. Add the porch or steps if you want separate pricing.",
    },
  },
  {
    name: "Bethesda",
    introduction: "A Bethesda house can have a new addition beside much older masonry, with a flagstone walk joining both. List the surfaces and any finishes you want to preserve. We plan the wash around those transitions and look for places that may need closer inspection.",
    metaDescription: "Power Washing in Bethesda for flagstone, siding and mixed exterior finishes. KrasPro checks joints, sealers and access so the quote reflects each exterior surface.",
    focusTitle: "Why we scope Bethesda additions and original finishes separately",
    paragraphs: [
      "In Montgomery County neighborhoods such as Bethesda, a remodeled home can have painted trim, newer cladding and original brick. We look for weathered caulk, open joints and unknown coatings when the materials touch. A small, inconspicuous area can help set expectations where an older finish is difficult to identify.",
      "A stone path may also contain repairs or sealed patches that look similar from the curb. Show where the path bends beside the house and where it meets a step. Those edges help us see which parts might require their own scope.",
    ],
    checklist: ["Addition and original wall junction", "Flagstone joints and previous sealer", "Access beside the house"],
    faqs: [
      {
        question: "Can you tell from a photo whether flagstone was sealed?",
        answer: "A photo can show sheen or patchiness, but old finishes can be hard to identify. Include the product name or application date if available.",
      },
      {
        question: "Can you wash around window trim before a touch-up?",
        answer: "Cleaning may help remove dirt from sound paint. Share any areas of peeling or open caulk so those details can be checked first.",
      },
      {
        question: "What shows how narrow a side approach is?",
        answer: "Send a view from each end and note the narrowest point. Include turns, steps or planting borders along the route.",
      },
    ],
    guide: {
      nearby: ["silver-spring", "rockville", "college-park"],
      pricingNote: "Show the total area of stone and describe the joints if you know how it was installed. Unknown coatings may require additional assessment.",
      examples: [
        {
          title: "Flagstone leading to an addition",
          description: "An example scope starts by mapping stable stones and weathered joints where the path bends. The owner can ask for the entry section first and review the shaded side run once the condition of the joints is clearer.",
        },
        {
          title: "Painted trim around a brick bay",
          description: "A row of streaks appears below a newer sill on an older wall. The scope could separate washing the trim from assessing brick joints and sealant. Close-ups may help distinguish surface dirt from a maintenance issue.",
        },
      ],
      sampleReviews: [
        "The estimate called out where the stone filler had worn away.",
        "We could see the original brick and new siding as distinct surfaces.",
      ],
    },
    cta: {
      title: "Mark the Surfaces You Want to Keep",
      description: "Send a Bethesda overview and mark where new finishes meet old. Include prior treatments on the path and note which surface you want reviewed first.",
    },
  },
  {
    name: "Catonsville",
    introduction: "When a Catonsville porch sits under mature trees, painted boards, stone steps and the walk to the curb can weather in different ways. Send a photo of the full approach. We look at shade, coatings and the change in grade before discussing what can be washed together.",
    metaDescription: "Power Washing in Catonsville for shaded walks, stone steps and painted porches. KrasPro inspects older finishes and itemizes the surfaces included in your quote.",
    focusTitle: "Why Catonsville porch work starts at the curb",
    paragraphs: [
      "Established Baltimore County residential blocks can have a yard that slopes up to the front door. Water moves differently from an upper landing than it does across a level walk. We plan around the full route, including paved edges where damp leaves collect after a storm.",
      "Porch paint deserves a separate look where boards stay damp under a mat. If the finish has begun to lift or the wood feels soft, point out the affected area when you send photos. The steps or stable path can still be considered on their own.",
    ],
    checklist: ["Porch finish beneath outdoor mats", "Stepped approach and railing feet", "Route from porch to sidewalk"],
    faqs: [
      {
        question: "Can porch paint be washed if the edges are flaking?",
        answer: "Send a close-up of exposed or peeling areas. Coating condition changes the proposed method and may put paint preparation ahead of a broader wash.",
      },
      {
        question: "Should the railing be included with the steps?",
        answer: "Ask for both by name. Rail materials and rust near feet or trim can need separate assessment from the stone.",
      },
      {
        question: "Why is one side of my walkway darker?",
        answer: "Shade, soil splash and water moving across the path can create an uneven appearance. Photograph the transition to help identify the area to inspect.",
      },
    ],
    guide: {
      nearby: ["ellicott-city", "baltimore", "pikesville", "dundalk"],
      pricingNote: "Show the full length of the walk for pricing. Stair runs, lower landings and bends can take more time than a flat slab.",
      examples: [
        {
          title: "Shaded route to a covered porch",
          description: "Two short stone stair runs connect the sidewalk to a wood porch. An example scope could focus on the staircase and its landings, with time to inspect the mat area and paint at the upper threshold.",
        },
        {
          title: "Detached garage apron",
          description: "A concrete apron below a tree develops dark streaks where it reaches the garage door. An example scope could cover the exposed slab, consider drainage at the threshold and flag deeper stains for separate discussion.",
        },
      ],
      sampleReviews: [
        "The view from the curb showed the whole approach under the trees.",
        "The garage apron could be priced while we reviewed the painted boards.",
      ],
    },
    cta: {
      title: "Photograph Your Approach From the Curb",
      description: "Show the route from sidewalk to door and add a close-up of the porch finish. Tell us which surface you want included in the Catonsville scope first.",
    },
  },
  {
    name: "College Park",
    introduction: "A College Park property near the University of Maryland may have only a short gap between occupancies for exterior work. Tell us when the entry needs to be open again and which areas you maintain. We can scope the surfaces people use every day first.",
    metaDescription: "Power Washing in College Park for entry walks, steps and rental property exteriors. KrasPro reviews access and separates requested surfaces in a written scope.",
    focusTitle: "Why we plan College Park washing around usable entrances",
    paragraphs: [
      "For a rental or owner-occupied house with a single main entrance, it helps to know when people use the walk and where equipment can sit. We start by agreeing on which steps, landings and paths are included so everyone understands how the entrance will be handled.",
      "For shared pavement, mark the boundary on a photo and tell us who manages it. The same request can include the front walk and rear patio as separate items, with work planned around access to the area you want to clean before occupancy changes.",
    ],
    checklist: ["Occupancy and turnover dates", "Marked limits on shared parking", "Front and alternate door access"],
    faqs: [
      {
        question: "Can you coordinate with a College Park property manager?",
        answer: "Share the point of contact, access hours and any required notice. A contact who can confirm the scope and open gates helps us plan.",
      },
      {
        question: "Do you need parking spaces empty?",
        answer: "Tell us which pavement you want cleaned and when vehicles can move. If it is shared, include the approved boundary and access window.",
      },
      {
        question: "Can I schedule the front entry alone before move-in?",
        answer: "Request the walk, steps and landing by name. List any rear work separately so we can look at it against your turnover schedule.",
      },
    ],
    guide: {
      nearby: ["laurel", "silver-spring", "bethesda", "hanover"],
      pricingNote: "A small entry can require its own visit when access hours are narrow. Ask to price the steps and walk together before adding optional rear surfaces.",
      examples: [
        {
          title: "Front approach between occupancies",
          description: "An example scope includes two steps, a landing and the concrete walk before keys change hands. A view from the street and a photo of the threshold help clarify the work and identify chips or repairs outside it.",
        },
        {
          title: "Shared back patio at a rental",
          description: "A patio sits behind a gate with little space to move furniture. The scope could agree who clears the area and what route occupants can use. The adjoining fence can be discussed as an independent option.",
        },
      ],
      sampleReviews: [
        "We could tell residents exactly which entrance would be affected.",
        "The rear patio stayed optional while we prepared the front before move-in.",
      ],
    },
    cta: {
      title: "Send the Entry and the Turnover Window",
      description: "For College Park, share a preferred date, an entry photo and the path occupants use. We can discuss which surfaces fit that window.",
    },
  },
  {
    name: "Columbia",
    introduction: "A Columbia townhouse deck can face a wooded common area while its front walk sits in full sun. That difference affects how long the boards and steps stay wet. We start with the materials and property boundaries so the wash fits the home and any association requirements.",
    metaDescription: "Power Washing in Columbia for shaded townhouse decks, siding and entry walks. KrasPro confirms access and surface boundaries to give you a clear written scope.",
    focusTitle: "Why Columbia townhome projects need clear boundaries",
    paragraphs: [
      "In Columbia's villages, common areas and neighboring decks can be within reach of a private walk or work area. If a gate opens onto a shared path or an association maintains part of the frontage, flag it early. We need to understand which surfaces are yours and where the work can be set up.",
      "For a weathered deck, railing paint and walking boards can call for separate handling. Tell us what finish is already there. If the floor is being stained afterward, that timing gives us more context for the cleaning scope.",
    ],
    checklist: ["HOA maintenance boundary", "Deck boards and railing coatings", "Gate and common path access"],
    faqs: [
      {
        question: "Who should check the HOA requirements?",
        answer: "Ask your association which surfaces it maintains and whether access or notice rules apply. Send any relevant conditions with your inquiry.",
      },
      {
        question: "Can you price steps, boards and rails separately?",
        answer: "Yes. Include a view from the yard and identify the rail material, which may differ from the floor.",
      },
      {
        question: "What should I mention if the deck is being stained afterward?",
        answer: "Tell us what is currently on the deck and what you plan to apply. Cleaning, coating removal and repairs may be separate scopes.",
      },
    ],
    guide: {
      nearby: ["ellicott-city", "laurel", "hanover", "catonsville"],
      pricingNote: "Specify whether the quote should cover walking boards, stairs and rails. Additional edges and finishes can add work beyond a simple floor measurement.",
      examples: [
        {
          title: "Rear deck facing common ground",
          description: "An example scope checks wood condition on the floor and reviews painted rails separately. A neighboring deck and narrow gate could determine the staging route and which faces of the railing are accessible from the unit.",
        },
        {
          title: "Front walk beside association pavement",
          description: "A private walk ends at a joint in a common sidewalk. Confirm the maintenance boundary with the association, then mark it on a photo. The quote could use that joint as the limit of the front work.",
        },
      ],
      sampleReviews: [
        "The pavement boundary was clear enough to show our association.",
        "We could leave the railing optional while planning to stain the floor.",
      ],
    },
    cta: {
      title: "Mark the Deck and the Property Line",
      description: "Send a Columbia deck or entry photo and circle your requested work. Flag adjoining association property and tell us which side we can use for access.",
    },
  },
  {
    name: "Dundalk",
    introduction: "A Dundalk stoop can collect grime right where concrete meets the brick face of a rowhouse. At an end unit, the side wall may show a different pattern after a wet summer. Photograph the steps and wall together so the proposed work can account for both materials.",
    metaDescription: "Power Washing in Dundalk for concrete stoops and end-unit siding. KrasPro reviews threshold access and adjacent brick to write a quote for the surfaces you choose.",
    focusTitle: "Why Dundalk stoops and end walls get separate attention",
    paragraphs: [
      "In Dundalk's rowhouse blocks, several front doors may be within a few steps of a shared approach. We check where the paved entry ends and how nearby railings and brick relate to the work. A close photo of a stain gives us only part of that information.",
      "If an end wall has newer cladding, tell us what it is and whether panels are loose. An intact surface may be suitable to clean after reviewing the joints and what is below, especially if the paved side yard leads past basement openings.",
    ],
    checklist: ["Concrete landing and door clearance", "Adjoining brick and painted rail feet", "Basement window position"],
    faqs: [
      {
        question: "Can you clean a stoop if the rail has rust spots?",
        answer: "We would look at the rail and slab first. Loose connections and set-in rust can be separate maintenance or treatment questions.",
      },
      {
        question: "What if water pools by the basement window?",
        answer: "Show the opening and describe when water collects. We need to see how the ground drains before agreeing to include the nearby pavement.",
      },
      {
        question: "Can I start with just the end wall?",
        answer: "Show the full elevation, including its upper edge and lower openings. That helps us understand both the condition and the available access.",
      },
    ],
    guide: {
      nearby: ["essex", "baltimore", "glen-burnie", "towson"],
      pricingNote: "An exposed end wall uses a different setup from the front steps. Have them listed separately so you can see what changes when you add the second surface.",
      examples: [
        {
          title: "Worn landing at a brick entry",
          description: "A landing has traffic grime between two rail posts. An example scope could focus on the concrete steps and landing, with review of the joint where concrete meets the painted door trim and the shared approach.",
        },
        {
          title: "End unit with a paved passage",
          description: "A thin concrete strip runs below siding and past a basement window. Pavement and cladding could be quoted separately after checking where the passage drains and whether the lower opening needs protection.",
        },
      ],
      sampleReviews: [
        "The estimate showed where our landing ended at the neighbor's steps.",
        "They asked about the basement window before pricing the side passage.",
      ],
    },
    cta: {
      title: "Show Us the Stoop From the Street",
      description: "Send a Dundalk entry photo with the door, lower brick and steps visible. Attach a separate photo if you want the side passage reviewed too.",
    },
  },
  {
    name: "Ellicott City",
    introduction: "In Ellicott City, the route from an upper driveway to a lower patio can cross sloped walks and retaining edges. Start with an overview of the grade. Older stonework or a painted porch may call for a different approach from the main concrete.",
    metaDescription: "Power Washing in Ellicott City for graded walks, stone entries and patios. KrasPro reviews drainage and material condition before setting out the work in writing.",
    focusTitle: "Why we look downhill on sloped Ellicott City lots",
    paragraphs: [
      "A hillside approach in Howard County can direct rinse water toward a lower landing or doorway. Before setting a scope, we ask where heavy rain goes and whether the walk passes a retaining wall, a planting bed or a basement opening. Two viewpoints can show grade better than a close-up.",
      "Older masonry near Historic Ellicott City can have patched joints. Modern properties with decorative stone can have similar transitions. We inspect for movement and damaged mortar before deciding whether stable adjacent pavement should be priced independently.",
    ],
    checklist: ["Slope below the driveway", "Basement entries and drains", "Historic or patched stone joints"],
    faqs: [
      {
        question: "Can an old stone wall be included with the path?",
        answer: "The condition of the joints matters. If mortar or stone is failing, the wall may need assessment and repair before washing.",
      },
      {
        question: "Will a sloped driveway need to dry after a storm?",
        answer: "Scheduling depends on weather, condition and access. Tell us if water remains near a low doorway after rain.",
      },
      {
        question: "Why send a drain photo if the patio is the only item?",
        answer: "The drain and slope show where rinse water travels. Include where the patio meets the house as well.",
      },
    ],
    guide: {
      nearby: ["columbia", "catonsville", "finksburg", "mt-airy"],
      pricingNote: "A lower patio may take extra setup even when its area is small. Show the stairs from the driveway and the closest drain or low point.",
      examples: [
        {
          title: "Upper driveway and stair landing",
          description: "An example scope cleans the traffic area and inspects the downhill landing before including it. The water route and the position of a retaining edge would help determine which surfaces the work starts with.",
        },
        {
          title: "Mortared stone beside a newer slab",
          description: "A newer pad meets older stonework by a back door. The pad can be considered separately while loose joints at the edge are assessed. Photos help distinguish dirt from a section that may need restoration.",
        },
      ],
      sampleReviews: [
        "We could see how the lower landing would be approached.",
        "The old stone and concrete were distinct items in the proposal.",
      ],
    },
    cta: {
      title: "Show Where the Grade Changes",
      description: "For Ellicott City, send one photo from the upper approach and one from the low point. Mark the path, patio or steps you want included.",
    },
  },
  {
    name: "Essex",
    introduction: "Essex homes near the Back River can have low side yards where fence panels and steps take longer to dry. Show the ground around the surface you want cleaned, including any nearby drain. We plan around the route to the yard and where the rinse water would go.",
    metaDescription: "Power Washing in Essex for damp side walks, fences and rear steps. KrasPro checks materials, access and nearby drains so the written quote reflects your property.",
    focusTitle: "Why we check the low points on Essex lots",
    paragraphs: [
      "In eastern Baltimore County, a paved side path can end just above a low lawn or drainage feature. We ask where water collects after rain and what is downhill from the work. A view from the back door may show neither the passage edge nor the lowest point in the yard.",
      "A wooden fence and stair can also stay wet near their bases. We review the board condition where they meet the ground. Weak, split or soft material changes the discussion about which surfaces are candidates for washing.",
    ],
    checklist: ["Low points and yard drainage", "Fence boards near grade", "Steps and stair fasteners"],
    faqs: [
      {
        question: "Does a nearby storm drain affect the work?",
        answer: "Tell us its position and where water travels in heavy rain. We can review runoff and the position of the drain as part of planning.",
      },
      {
        question: "Can I request one face of the fence?",
        answer: "Specify which side you maintain and show how to reach it. Include gates, dense plants or tight corners.",
      },
      {
        question: "Do damp steps always need a wash?",
        answer: "The discoloration could be surface buildup or a sign of lingering moisture. We would check whether the wood is solid and the steps secure.",
      },
    ],
    guide: {
      nearby: ["dundalk", "baltimore", "towson", "glen-burnie"],
      pricingNote: "Ask for fence length and material to be listed separately from the walkway. Narrow access or a low landing may add preparation to a modest area.",
      examples: [
        {
          title: "Vinyl fence beside a low side yard",
          description: "An example quote includes reachable fence faces, with a separate review of the lower corner that stays wet. Adjoining planting and the drainage route would be identified before agreeing to wash the full run.",
        },
        {
          title: "Back steps with discolored bottom treads",
          description: "A short set of wood steps has the most growth near the ground. The estimate could separate review of those treads from washing the intact concrete pad they lead to, especially where the pad meets the lawn.",
        },
      ],
      sampleReviews: [
        "We showed where water gathers at the bottom of the yard.",
        "The patio went on the quote while the worn treads got their own note.",
      ],
    },
    cta: {
      title: "Include the Low Point in Your Photos",
      description: "Send Essex pictures from the door and the side yard. Mark the surfaces you want cleaned and show where the ground starts to dip.",
    },
  },
  {
    name: "Finksburg",
    introduction: "At a Finksburg property, the garage apron, rear deck and house can sit well apart. Pick the surface you use or want to maintain first. We look at where equipment can reach and whether it makes sense to wash different parts of the lot together.",
    metaDescription: "Power Washing in Finksburg for long approaches, garage aprons and decks. KrasPro reviews outdoor water and setup distances before preparing a written quote.",
    focusTitle: "Why we review access before quoting a Finksburg wash",
    paragraphs: [
      "On a larger Carroll County lot, the outdoor tap may sit opposite a detached garage. A long gravel approach also affects where equipment can be staged. A photo from the driveway entrance helps us understand the route as well as the usable paved space.",
      "The part where you unload the car may be worth addressing ahead of scattered discoloration across a long drive. We look at the area that takes regular traffic and ask where the remaining pavement changes to gravel, asphalt or a previously sealed surface.",
    ],
    checklist: ["Outdoor tap and staging distance", "Apron material and traffic patterns", "Access to a detached building"],
    faqs: [
      {
        question: "Can I request just the garage apron?",
        answer: "Describe the start and end of the paved section. Approximate dimensions and a wide photo help us put the rest of the driveway outside the scope.",
      },
      {
        question: "What if the water connection is far from the garage?",
        answer: "Tell us which connection is available and give its rough distance from the work. We can discuss setup before a visit.",
      },
      {
        question: "Do you wash a gravel approach?",
        answer: "Gravel needs different maintenance from a sound paved surface. Show us any separate concrete apron you want considered.",
      },
    ],
    guide: {
      nearby: ["westminster", "reisterstown", "owings-mills", "mt-airy"],
      pricingNote: "Include dimensions for the part you want cleaned. A garage apron and the whole driveway are different scopes, especially where the tap is distant.",
      examples: [
        {
          title: "Detached garage apron by a gravel approach",
          description: "A concrete apron ends at loose gravel. An example scope stops at the concrete edge and considers where equipment can sit without blocking the garage. Wide photos can help clarify what is part of the paved area.",
        },
        {
          title: "Rear deck away from the tap",
          description: "A deck sits beyond several changes in grade. A sample plan checks the route and stair condition, then prices the deck separately from any surface close to the driveway. The owner can compare them before scheduling.",
        },
      ],
      sampleReviews: [
        "We marked the paved apron instead of measuring the whole drive.",
        "They asked about distance before quoting the deck behind the house.",
      ],
    },
    cta: {
      title: "Pick the Surface You Use Most",
      description: "For Finksburg, send a driveway overview, mark your first priority and point out the working tap. Include access to any detached structure.",
    },
  },
  {
    name: "Frederick",
    introduction: "Near Frederick's historic core, brick and wood can meet at one entry. Farther out, a new driveway or deck may be the main item on your list. Show us the parts you want cleaned and tell us which finishes you plan to preserve.",
    metaDescription: "Power Washing in Frederick for brick entries, painted trim and newer patios. KrasPro reviews mixed materials and access before writing a surface-specific quote.",
    focusTitle: "Why we assess old and new Frederick finishes individually",
    paragraphs: [
      "A home near downtown may have a brick facade, older paint and patched joints close to the front walk. We review masonry condition and paint wear before including those areas. Nearby sound pavement may still be considered while the original wall needs more assessment.",
      "For newer homes, the decision may be how to clean a patio finished by the builder or boards recently stained by the owner. Share the surface age and any treatment it received. A photo of the edge, where dirt collects or old sealer stops, gives a better view of condition.",
    ],
    checklist: ["Mortar patches and brick edges", "Age of concrete or deck finishes", "Junction of old and new work"],
    faqs: [
      {
        question: "Will every dark patch disappear from old Frederick brick?",
        answer: "Stains can reflect moisture, age or old repairs. We check the surface and discuss reasonable expectations before proposing a method.",
      },
      {
        question: "Should I mention a recent sealer on concrete?",
        answer: "Yes. A product name or application date helps us discuss the finish and what it can tolerate.",
      },
      {
        question: "Can I request a small wash beside old brick?",
        answer: "Show the adjoining materials and the edge where they meet. The condition of that edge helps establish the limits of the job.",
      },
    ],
    guide: {
      nearby: ["mt-airy", "westminster", "ellicott-city", "finksburg"],
      pricingNote: "Ask to price stable pavement independently from older masonry. Uncertain finishes can require review before there is enough information to price the rest.",
      examples: [
        {
          title: "Historic entry beside a modern path",
          description: "An example quote covers the newer path and leaves the brick open for review while the mortar condition is assessed. Showing the paving joint and the brick edge in the same photo makes the scope easy to define.",
        },
        {
          title: "Recent patio with a coating",
          description: "Dark bands show up where outdoor furniture once stood. The sample scope would ask about the coating and look at a less visible area, then discuss which variation could remain after cleaning.",
        },
      ],
      sampleReviews: [
        "We could start with the path while asking about the old masonry.",
        "The proposal gave us a way to document the patio sealer.",
      ],
    },
    cta: {
      title: "Show Us the Old Finish and the New One",
      description: "Send a Frederick exterior photo from far enough back to show the approach. Add a finish close-up where the old and new materials meet.",
    },
  },
  {
    name: "Glen Burnie",
    introduction: "The space between a Glen Burnie driveway and a low garage threshold can collect tire marks and grit. Tell us whether you want the slab, the front walk or both reviewed. We look at where water will go and which marks may need separate treatment.",
    metaDescription: "Power Washing in Glen Burnie for driveway slabs, garage aprons and concrete walks. KrasPro checks stains and thresholds before drawing up your written quote.",
    focusTitle: "Why we separate tire traffic from set-in driveway stains",
    paragraphs: [
      "An Anne Arundel County driveway can double as daily parking and the walking route to the front door. We look at where the traffic lines stop, whether any spots are close to a garage seam and what part you actually want cleaned.",
      "If the walk has been patched or sealed, its condition may differ from the larger slab. Tell us about repairs and mark the concrete joints you want to use as the edge of the work. Include the threshold when you photograph the area.",
    ],
    checklist: ["Tire paths and fluid spots", "Garage threshold and slab seams", "Patches along the front walk"],
    faqs: [
      {
        question: "Will washing remove old automotive stains?",
        answer: "It may lighten some stains, depending on the concrete and the substance. Share the age and size of the spot so we can discuss what to expect.",
      },
      {
        question: "Can work reach all the way to the garage door?",
        answer: "We check the seam and drainage first. Show where water sits after rain, especially when the pavement falls toward the door.",
      },
      {
        question: "Can I wash just the walking route beside the drive?",
        answer: "Yes. Identify where the path branches off and whether to include the steps and front landing.",
      },
    ],
    guide: {
      nearby: ["severn", "hanover", "dundalk", "essex"],
      pricingNote: "Ask whether spot treatment is included with a general driveway wash. Several disconnected areas can require a different scope from one continuous slab.",
      examples: [
        {
          title: "Garage apron with an oil mark",
          description: "A sample estimate covers general cleaning and discusses the concentrated stain separately. A close photo of the affected area and a wide photo of the garage help set expectations for the work and its limits.",
        },
        {
          title: "Driveway beside a patched walk",
          description: "Two concrete surfaces meet but only one has older cracks and patching. The quote could list them separately and record which joints and repaired parts we need to inspect before agreeing to wash.",
        },
      ],
      sampleReviews: [
        "The estimate explained the oil mark separately from the rest of the slab.",
        "We could see which joint marked the driveway wash boundary.",
      ],
    },
    cta: {
      title: "Send a Wide View of the Driveway",
      description: "For Glen Burnie, show the slab up to the garage and share one close-up of the mark that concerns you. Point out where the work should stop.",
    },
  },
  {
    name: "Hanover",
    introduction: "A Hanover townhouse can have siding above a front garage and parking beneath a rear deck. Tell us what can be moved and who controls access from each side. We look at the areas above and below the work before pricing the visit.",
    metaDescription: "Power Washing in Hanover for townhouse siding, garage approaches and elevated decks. KrasPro checks staging and shared access before writing your project quote.",
    focusTitle: "Why a Hanover wash needs an upper and lower plan",
    paragraphs: [
      "In a townhouse development, a route to the rear can cross shared pavement or a narrow lane. Tell us where equipment can sit and how long the space is available. A small surface above a garage may still need setup at street level before work can begin.",
      "If the rear deck sits above parking or a patio, we ask what is underneath. The position of lower doors and the way water passes through the deck affect how we divide the wash into upper and lower surfaces.",
    ],
    checklist: ["Rear staging and parking availability", "Area beneath raised decking", "Association limits and shared pavement"],
    faqs: [
      {
        question: "Does an elevated deck need an empty area underneath?",
        answer: "Tell us about parked vehicles, furniture or nearby doors. We can discuss what should be moved and which lower areas need protection.",
      },
      {
        question: "Can you quote a single townhouse elevation?",
        answer: "Yes. Send a wide view and identify the facade sections you maintain. Mention rules that affect parking or access.",
      },
      {
        question: "What helps you plan equipment parking?",
        answer: "A picture from the lane and a preferred time are useful. Let us know if spaces are assigned or the lane needs to remain open.",
      },
    ],
    guide: {
      nearby: ["severn", "glen-burnie", "laurel", "columbia"],
      pricingNote: "A raised deck can need more setup than a ground-level one. State whether stairs, underside or the garage approach should be priced alongside the floor.",
      examples: [
        {
          title: "Deck above a parking pad",
          description: "A sample scope begins with the deck surface and identifies the items below that must be cleared. The parking pad could be priced separately once the access window and the route to the stairs are confirmed.",
        },
        {
          title: "Garage-front siding with a short drive",
          description: "A townhouse has discoloration starting above its garage door. An example plan checks the panels and the area around the door seals. The driveway can remain optional while the upper wall is reviewed.",
        },
      ],
      sampleReviews: [
        "The proposal showed we needed to clear the space underneath the deck.",
        "We sent the community access instructions before choosing a time.",
      ],
    },
    cta: {
      title: "Show What Sits Below the Work",
      description: "For a Hanover quote, photograph the deck or wall and the area directly below it. Let us know when the parking space can be cleared.",
    },
  },
  {
    name: "Laurel",
    introduction: "Before requesting a Laurel wash, look at where your private walk meets common pavement or a public sidewalk. Send a photo of the surface you want to include. The address and a view from the street help us see whether access is from the front or rear.",
    metaDescription: "Power Washing in Laurel for walks, patios and mixed exterior materials. KrasPro confirms the property access and wash boundaries before issuing a written quote.",
    focusTitle: "Why we ask for the full Laurel address",
    paragraphs: [
      "Laurel mailing addresses can cover properties in several counties. An exact address and photos help us establish the setting. The route may run down an older home's narrow side passage or along a path managed by an association in a newer development.",
      "Mark the boundary if the concrete continues beyond your entry. We also review how to reach a rear patio. A steep step in a side passage, or a gate that swings inward onto the paving, may change the layout for a short wash.",
    ],
    checklist: ["Street address and side access", "Private path and common sidewalk limits", "Gate clearance and patio furniture"],
    faqs: [
      {
        question: "Is my Laurel ZIP code enough to ask for a quote?",
        answer: "Include the street address and an exterior photo. Those details help locate the property and plan access to the wash area.",
      },
      {
        question: "Can you include the pavement past my private walk?",
        answer: "Confirm who is responsible and where the private section ends. Share the applicable access or authorization details for any common area you want included.",
      },
      {
        question: "Can you work through a narrow gate?",
        answer: "Show the gate open and the route immediately beyond it. Steps, turn clearance and a second route can change the plan.",
      },
    ],
    guide: {
      nearby: ["columbia", "hanover", "college-park", "severn"],
      pricingNote: "Price the surfaces you control. Ask to see the rear patio as a separate line item if it needs a different approach from the entry.",
      examples: [
        {
          title: "Private walk meeting a common sidewalk",
          description: "A short path leads from a front porch to shared concrete. An example quote stops at the nearest joint once the owner confirms who maintains the larger slab. The location of a shared step would be reviewed separately.",
        },
        {
          title: "Patio behind a gate with steps",
          description: "A small patio is reachable through a narrow gate. The scope can establish who clears the patio, whether equipment fits and how to keep a path to the door while the surface is being cleaned.",
        },
      ],
      sampleReviews: [
        "Marking the pavement joint made the limits clear.",
        "The gate turned out to matter more than the size of the patio.",
      ],
    },
    cta: {
      title: "Confirm the Address and the Edge of the Wash",
      description: "Send your Laurel address, the best side to approach from and a marked photo of the patio or walk you want included.",
    },
  },
  {
    name: "Lutherville-Timonium",
    introduction: "A Lutherville-Timonium home can have detailed porch trim at the front and a wide driveway at the side. Name what you want to maintain before grouping the whole exterior into one wash. We look at the finishes and the available ways to reach them.",
    metaDescription: "Power Washing in Lutherville-Timonium for porches and driveways. KrasPro checks paint, pavement and access to price the surfaces you want cleaned in writing.",
    focusTitle: "Why older porch finishes get their own scope",
    paragraphs: [
      "In the older part of Lutherville, a porch can have layers of paint and detailed trim. Elsewhere around Timonium a detached home may have a wider concrete approach. Photos that show how those surfaces meet steps or trim give us more information than the house size.",
      "We look for wear along the porch edges, beneath mats and around rail posts. If you plan carpentry or new paint, mention the sequence. There may be sound surfaces to clean now and joints or treads to review as part of repairs.",
    ],
    checklist: ["Trim bases and railing posts", "Paint and planned repairs", "Side driveway measurements"],
    faqs: [
      {
        question: "Can I ask about washing ahead of porch carpentry?",
        answer: "Describe the repairs and sequence you have in mind. We can discuss which cleaning fits before carpentry and which surfaces should wait.",
      },
      {
        question: "Do porch dimensions help if I sent a photo?",
        answer: "Yes. An approximate length, width and step count give the photo scale. Mention rails or trim you want reviewed.",
      },
      {
        question: "Can I keep part of the driveway available?",
        answer: "Tell us which vehicle route you need. We can discuss the options based on space, drainage and the scope.",
      },
    ],
    guide: {
      nearby: ["towson", "pikesville", "phoenix", "sparks"],
      pricingNote: "Ask for the porch to be quoted separately from the driveway. Steps and rails add edges while pavement width and access affect setup on a broad slab.",
      examples: [
        {
          title: "Painted porch beneath deep eaves",
          description: "An example scope inspects flooring at the outer edge and around older posts. The owner could start with the concrete stairs, review weak paint around the rail and choose which sound wood surfaces to include.",
        },
        {
          title: "Driveway with a separate walking strip",
          description: "Two paved areas lead to different entrances. An example quote lists the parking slab and the path guests use. The plan could keep a specific route open to the garage if the available space allows.",
        },
      ],
      sampleReviews: [
        "The porch was assessed on its own before we chose a wash.",
        "Our repair timing was included when we discussed the porch surface.",
      ],
    },
    cta: {
      title: "Tell Us Which Entrance Comes First",
      description: "Send a Lutherville-Timonium photo of the porch and another of the drive. Include any repairs or paint dates that should shape the wash.",
    },
  },
  {
    name: "Mt. Airy",
    introduction: "On a Mt. Airy deck above a sloping yard, pictures from the door can miss where the stairs end and where water travels. Take a second photo from below. We can then see the approach and discuss whether the boards and lower treads are suitable for cleaning.",
    metaDescription: "Power Washing in Mt. Airy for sloped deck stairs, paved approaches and patios. KrasPro checks grade, finish and access before setting out your quote in writing.",
    focusTitle: "Why we ask for the view from the bottom of the stairs",
    paragraphs: [
      "Mt. Airy straddles Carroll and Frederick counties. When a lot drops past the rear deck, it helps to know whether equipment should arrive from the driveway or around the side. Show the path between the street, yard and stair landing.",
      "The bottom tread and the boards nearest the house can show very different wear. The soil line, stair edges and joints deserve separate photos. That helps us review what is suitable to wash and where repairs can be discussed independently.",
    ],
    checklist: ["View from beneath the staircase", "Route around the grade", "Lower stair landing condition"],
    faqs: [
      {
        question: "Do you need the county if I gave a Mt. Airy ZIP code?",
        answer: "Include the street address and show which side of the house gives yard access. That helps establish the property location and route.",
      },
      {
        question: "Are deck stairs automatically included in a floor wash?",
        answer: "List the stairs separately. Their condition and access may differ from the walking boards above.",
      },
      {
        question: "Can I request the driveway before adding my patio?",
        answer: "Yes. Show where the driveway ends, then include an optional view of the patio and the path to it.",
      },
    ],
    guide: {
      nearby: ["frederick", "westminster", "finksburg", "ellicott-city"],
      pricingNote: "An elevated stair run may add setup beyond a deck floor. Include the number of treads and say if the bottom landing is another surface you want priced.",
      examples: [
        {
          title: "Tall deck and ground-level landing",
          description: "The deck floor looks sound but the last two treads stay damp beside grass. A sample scope could list the floor and paved landing, then consider the stairs after a closer look at the lower treads.",
        },
        {
          title: "Driveway above a rear path",
          description: "An example plan could wash the paved area where cars turn. A photo from lower on the slope would help decide whether to add the rear path and how to handle the change in grade.",
        },
      ],
      sampleReviews: [
        "The second picture from below showed the actual stairs and approach.",
        "We could review the lower treads without delaying the driveway estimate.",
      ],
    },
    cta: {
      title: "Take One Photo From Below the Deck",
      description: "For Mt. Airy, send a view from the door and another from the bottom step. Identify which floor, stairs or landing matter most.",
    },
  },
  {
    name: "Owings Mills",
    introduction: "At an Owings Mills townhome, grass outside the fence may be common space while the deck and steps belong to your unit. Show us the surface to clean and the path from parking. Include any gate, stairs or association-managed route in the photos.",
    metaDescription: "Power Washing in Owings Mills for townhome siding, decks and paved walks. KrasPro reviews shared access and materials before preparing an itemized written quote.",
    focusTitle: "Why we confirm the route behind the fence in Owings Mills",
    paragraphs: [
      "In a planned Baltimore County development, the shortest path to the rear may cross property you cannot use for equipment. Confirm whether access is through your gate or past a shared path and tell us if the association has rules for scheduling or staging.",
      "A vinyl wall above composite decking can need different preparation from the boards beneath it. Share any manufacturer or finish details you have. We consider whether it makes sense to quote the wall and deck together or start with one surface.",
    ],
    checklist: ["Unit boundaries and path instructions", "Deck material and wall finish", "Distance from parking to the gate"],
    faqs: [
      {
        question: "What if my Owings Mills association requires notice?",
        answer: "Send the lead time or access rules with your inquiry. We can plan the requested visit around conditions that you confirm with the association.",
      },
      {
        question: "Can you review composite boards if I do not know the brand?",
        answer: "Show a board edge and any label you can safely see. Condition and product information help guide the discussion about cleaning.",
      },
      {
        question: "Should I request the rails if I only need the floor?",
        answer: "Ask about the rails separately and say whether they are vinyl, metal or wood. The quote can leave them optional.",
      },
    ],
    guide: {
      nearby: ["reisterstown", "pikesville", "finksburg", "lutherville-timonium"],
      pricingNote: "Ask to list the deck floor separately from rails and side siding. Staging restrictions or a long approach can affect the time involved.",
      examples: [
        {
          title: "Composite deck facing common ground",
          description: "A possible scope checks the board material and identifies which stairs and rails are part of the unit. A route through the homeowner's gate can be considered once its opening and distance from parking are clear.",
        },
        {
          title: "Green band along a side wall",
          description: "Discoloration sits behind a deck box and continues along vinyl panels. The estimate could list the siding by elevation and ask the owner to clear enough of the deck to review the wall and lower trim.",
        },
      ],
      sampleReviews: [
        "We confirmed with the association which path could be used.",
        "The side wall and composite floor were easy to compare as separate items.",
      ],
    },
    cta: {
      title: "Include the Route From Parking to Your Gate",
      description: "Send an Owings Mills photo of the wall or deck and show how to reach it. Add association instructions affecting the visit.",
    },
  },
  {
    name: "Parkton",
    introduction: "In Parkton, a deck on a wooded lot can look dry at the door while the lower stairs stay damp and gather leaves. Walk the route before taking pictures. We look at the lower landing, wood condition and the way to reach both from the driveway.",
    metaDescription: "Power Washing in Parkton for wooded decks, outdoor stairs and concrete pads. KrasPro checks wood condition and equipment access before giving a written quote.",
    focusTitle: "Why we start with the lowest treads in Parkton",
    paragraphs: [
      "In northern Baltimore County, a wooded rear lot can keep deck stairs shaded much of the day. Debris near the foot of the stairs may hide worn edges and several seasons of moisture around the posts. We check those areas before proposing a wash of the complete deck.",
      "Show where an outdoor tap is available and whether a clear path goes around the house. Tight terrain or a rise beside the deck can make the setup distance more important than the size of the area itself.",
    ],
    checklist: ["Low treads and landing moisture", "Outdoor tap and the slope around it", "Wood under leaf buildup"],
    faqs: [
      {
        question: "Does leaf debris need to be cleared before the estimate?",
        answer: "Show what you can reach and let us know if leaves are packed beneath the rails or stairs. This helps us inspect the underlying surfaces.",
      },
      {
        question: "Can I wash the floor and leave the worn stairs for later?",
        answer: "Send a photo of the junction and show another route to the floor if available. Safe access affects whether those items can be handled separately.",
      },
      {
        question: "Must the outdoor tap be next to the deck?",
        answer: "Tell us where a working connection is available and give a rough distance. That helps us plan for a longer setup.",
      },
    ],
    guide: {
      nearby: ["sparks", "phoenix", "reisterstown", "bel-air"],
      pricingNote: "Ask for floor, stairs and landing to be priced separately if they differ in material. More rails or a longer staging route can affect the quote.",
      examples: [
        {
          title: "Wood stairs beside a wooded edge",
          description: "In an example scope, lower post bases and damp treads are reviewed independently from the deck boards near the house. An open approach from the yard can help show whether the floor can be considered first.",
        },
        {
          title: "Utility pad below a deck",
          description: "A small concrete pad has a dark outline where leaves were trapped. The scope could focus on the slab and record the position of a nearby door. The wood above would remain a separate surface for review.",
        },
      ],
      sampleReviews: [
        "The lower stair pictures helped separate washing from repairs.",
        "We could price the concrete pad without including the entire deck.",
      ],
    },
    cta: {
      title: "Show the Landing as Well as the Deck",
      description: "For Parkton, send a view from the door and one from the lowest step. Point out the material you want quoted and any worn areas.",
    },
  },
  {
    name: "Phoenix",
    introduction: "On a Phoenix property, the patio might sit beside planting beds while the fence or pool surround is across the yard. List the surfaces by location. We can assess materials and discuss what access or protection is needed for each area.",
    metaDescription: "Power Washing in Phoenix, MD for patios, fences and pool surrounds. KrasPro reviews drainage and sensitive borders before preparing a written project quote.",
    focusTitle: "Why we check the borders of Phoenix patios first",
    paragraphs: [
      "In northern Baltimore County, broad rear yards can bring pavers, garden beds and several outdoor areas into the same job. We check where paving ends and what lies below the work area, especially if a low step leads toward a planted border or pool.",
      "A painted fence and textured patio can call for separate preparation. Tell us whether they have already been sealed or stained. Include the location of doors, steps or furniture that needs to stay nearby while work goes ahead.",
    ],
    checklist: ["Paver joints and patio edges", "Distances between work areas", "Plant and pool border protection"],
    faqs: [
      {
        question: "Can pavers with loose filler be washed?",
        answer: "Show where filler has moved and whether any stones feel loose. Joint repair or new fill may need to be discussed before washing.",
      },
      {
        question: "Should I mention a pool outside the wash area?",
        answer: "Yes. Note the nearest edge and whether the ground slopes toward it. We can use that information when reviewing the work.",
      },
      {
        question: "Can I price the fence later?",
        answer: "Give us the length, material and which faces can be reached when you are ready. The patio can be considered first.",
      },
    ],
    guide: {
      nearby: ["sparks", "parkton", "lutherville-timonium", "towson"],
      pricingNote: "Describe the patio and distance to other surfaces. A long fence run or pool surround can be quoted as an option if it takes separate setup.",
      examples: [
        {
          title: "Pavers beside a planted border",
          description: "An example scope reviews joint material and roots at the perimeter before pricing the patio. The quote could use a low step and the nearby planted edge as visible boundaries around the seating area.",
        },
        {
          title: "Textured concrete inside a pool gate",
          description: "An example plan inspects the concrete coating and route through the gate, then looks at how to protect the pool edge. A wood fence just beyond the enclosure could be priced separately.",
        },
      ],
      sampleReviews: [
        "They asked about joint material and plants before pricing the patio.",
        "We discussed the pool edge before adding the surround to the job.",
      ],
    },
    cta: {
      title: "Mark the Patio Edge and the Planting Beds",
      description: "Send a Phoenix photo with the edges visible. Show nearby plants, pool coping or a coating you want to protect during the wash.",
    },
  },
  {
    name: "Pikesville",
    introduction: "A Pikesville home may have a brick front and siding on a later addition, with a concrete approach between the two. Show us the surfaces from one viewpoint. We look at the material change and which entrance you need to keep available.",
    metaDescription: "Power Washing in Pikesville for brick entries, siding and concrete walks. KrasPro reviews coatings and adjoining materials before writing your project scope.",
    focusTitle: "Why we look at the seam between Pikesville exterior materials",
    paragraphs: [
      "On a house with a masonry front and later cladding, we check how joints and trim meet before deciding how far the work can extend. Unfinished edges or open seams are worth identifying early. A photo from the side can show a transition missed by a straight-on exterior view.",
      "A front walk can also collect rust around rail posts or soil under a planted edge. We look at pavement staining as a different issue from dirt on a wall. That lets you decide what needs review on an often-used approach.",
    ],
    checklist: ["Masonry and siding junction", "Rail post bases and stains", "Access to the main entry"],
    faqs: [
      {
        question: "Can washing remove rust next to rail posts?",
        answer: "General washing may improve surrounding dirt while the mark remains. Send a close-up so the condition of the rail and concrete can be reviewed.",
      },
      {
        question: "Do both sides of a material seam go into the job?",
        answer: "The seam may be a useful scope boundary. We look at each finish and the condition of the joint before agreeing where the work stops.",
      },
      {
        question: "Can you review the back addition by itself?",
        answer: "Yes. Include a photo of neighboring brick or painted trim so we can understand the limit of the siding work.",
      },
    ],
    guide: {
      nearby: ["owings-mills", "lutherville-timonium", "towson", "catonsville"],
      pricingNote: "Quote the sidewalk and facade separately. A narrow path, coating changes and material seams can each affect how much setup is involved.",
      examples: [
        {
          title: "Siding at a brick addition junction",
          description: "A green patch appears on cladding below a gutter line. An example scope could start with a review of the transition and coated trim. The main masonry wall would get its own assessment if requested.",
        },
        {
          title: "Walkway used by visitors",
          description: "A concrete approach has orange marks around old rail posts. A sample plan could identify where the concrete may need stain treatment and check whether the affected railing has loose or flaking sections.",
        },
      ],
      sampleReviews: [
        "The brick and siding had separate lines in the proposal.",
        "The rust at the railing was discussed before we included the walk.",
      ],
    },
    cta: {
      title: "Photograph the Transition Between Surfaces",
      description: "Send a Pikesville overview and a close-up where the materials meet. Tell us whether you need the wall, walk or both reviewed.",
    },
  },
  {
    name: "Reisterstown",
    introduction: "In Reisterstown, washing can be an early step before deciding what to do with weathered deck boards or painted porch trim. Photograph the worst area and one that still looks sound. We can compare the surfaces before deciding which work belongs in the cleaning quote.",
    metaDescription: "Power Washing in Reisterstown for weathered decks, porch trim and steps. KrasPro reviews the finish and separates cleaning from repair in your written quote.",
    focusTitle: "Why we examine the finish before washing in Reisterstown",
    paragraphs: [
      "In the Baltimore County community where KrasPro is based, a wood porch or deck may combine boards with old stain and later repairs. We compare exposed flooring with shaded edges and look for wear beside stair ends, posts and the door threshold.",
      "Tell us if you plan to repaint or stain afterward. Maintenance cleaning and preparation for a finish can call for different scopes. Share any details about last year's coating or the product used on replaced wood so the work can be discussed in context.",
    ],
    checklist: ["Shaded and exposed deck boards", "Previous coats and planned finish", "Steps, rails and replacement boards"],
    faqs: [
      {
        question: "Should I strip the deck before asking for a quote?",
        answer: "Show the existing finish and tell us what you want next. A wash, stripping and repair can be separate decisions based on the wood and coating condition.",
      },
      {
        question: "Will new boards match older ones after cleaning?",
        answer: "Age and exposure can leave color differences. We can discuss expectations so you can decide whether to include a finish later.",
      },
      {
        question: "Can you look at porch paint before I hire a painter?",
        answer: "Yes. Point out bare spots and peeling areas so we can see which surfaces are suitable to wash before painting.",
      },
    ],
    guide: {
      nearby: ["owings-mills", "finksburg", "pikesville", "westminster"],
      pricingNote: "Ask to have washing and any extra preparation described independently. Rail details and board condition can affect the time needed on a small area.",
      examples: [
        {
          title: "Deck with replacement boards",
          description: "An older deck has gray wood with newer boards near the house. An example scope records both wood conditions and discusses expected color variation before work starts. The owner can then decide which finish to pursue.",
        },
        {
          title: "Porch with wear at the steps",
          description: "The floor inside a covered porch has sound paint while the step edges peel. A proposed scope could assess dirt on intact portions and flag the lower treads for a separate repair or coating discussion.",
        },
      ],
      sampleReviews: [
        "It helped to talk about cleaning before picking a stain.",
        "The new boards and worn steps each got a note in the scope.",
      ],
    },
    cta: {
      title: "Start With the Worn Boards",
      description: "Send a Reisterstown overview, a photo of a sound spot and a photo of worn wood. Tell us if the wash is part of a finish change.",
    },
  },
  {
    name: "Rockville",
    introduction: "A Rockville townhouse lane or cul-de-sac can put a private parking pad beside paving someone else maintains. Mark the surface you want washed. We look at slab condition and when the area can be cleared before preparing a quote.",
    metaDescription: "Power Washing in Rockville for driveways, parking pads and walkways. KrasPro checks slab edges, prior treatments and access for a clearly itemized written quote.",
    focusTitle: "Why Rockville pavement estimates start with the slab edges",
    paragraphs: [
      "Residential drives around Rockville range from short pads behind townhomes to broader concrete approaches at detached houses. Two adjacent pours can have different ages and levels of wear. Photograph the joints where the work should start and stop so the proposed boundary can be clear.",
      "Let us know how residents and guests use the area during the week. Moving vehicles before the work may be easier when the scope identifies one complete slab at a time. Mention any coating, patch or unusual traffic stain you have noticed.",
    ],
    checklist: ["Slab limits and previous sealers", "Resident or guest parking plan", "Apron and walk intersections"],
    faqs: [
      {
        question: "Can you quote two parking pads together?",
        answer: "Show both, give the distance between them and tell us if they can be cleared together. The scope can still list the pads individually.",
      },
      {
        question: "Will the extension match the original drive afterward?",
        answer: "Concrete mix, finish and exposure can leave visible differences. A wash can remove surface dirt while the appearance of the two pours remains distinct.",
      },
      {
        question: "Should I mention possible old sealer?",
        answer: "Yes. Share any information about sheen, peeling or prior repairs if you do not know the product.",
      },
    ],
    guide: {
      nearby: ["bethesda", "silver-spring", "college-park", "laurel"],
      pricingNote: "Count the slabs in the scope and mention previous patching or sealing. Separate access windows can add setup to a smaller area.",
      examples: [
        {
          title: "Townhouse pad beside a shared lane",
          description: "A sample scope could use the transition between concrete and asphalt as the wash boundary. Cars and bins could be moved from the private pad in the agreed window while the shared lane remains available.",
        },
        {
          title: "Driveway with a newer extension",
          description: "One half of the driveway is an original slab and the other is a recent addition. The quote could describe both sections and note that differences in age and finish may remain visible after washing.",
        },
      ],
      sampleReviews: [
        "We knew exactly where the work stopped at the lane.",
        "The proposal described the newer concrete on its own.",
      ],
    },
    cta: {
      title: "Draw the Boundary on a Driveway Photo",
      description: "For Rockville, mark the slabs to include and show any patched or coated areas. Tell us when the parking area will be free.",
    },
  },
  {
    name: "Severn",
    introduction: "A Severn driveway may run past a front walk to a garage, but the part you use most might be the strip where you step out of the car. Show us the joints, steps and doorway. We can price the surfaces separately and discuss rear patio access if needed.",
    metaDescription: "Power Washing in Severn for entry walks, garage aprons and patios. KrasPro checks pavement, thresholds and access to define the wash in a written project quote.",
    focusTitle: "Why we scope around the way you use your Severn driveway",
    paragraphs: [
      "In this part of Anne Arundel County, an entry walk and a parking apron can connect at one slab. We agree on which part needs attention and where vehicles can be while the work is underway. A few well-placed photos often make a smaller first scope easier to discuss.",
      "A patio behind an attached garage may be independent from the front approach. Show the side gate and any entrance off the patio. Where the slab meets siding or a threshold is worth seeing before work goes on the quote.",
    ],
    checklist: ["Main entry route and parking", "Patio access around the garage", "Door and slab height"],
    faqs: [
      {
        question: "Can one car stay parked while the apron is washed?",
        answer: "Show where it would sit and what you want cleaned. The usable work area and access will determine whether that works.",
      },
      {
        question: "Should I put front and rear work in one inquiry?",
        answer: "List each part and show both routes. That gives us enough information to discuss a combination or a shorter first visit.",
      },
      {
        question: "How do I show the threshold height?",
        answer: "Send a side view with the pavement and door in the same frame. Mention where rainwater collects near it.",
      },
    ],
    guide: {
      nearby: ["glen-burnie", "hanover", "laurel", "columbia"],
      pricingNote: "Ask to list the apron, walk and patio separately. Pavement area and any extra setup behind the house affect the quote.",
      examples: [
        {
          title: "Walking strip beside the driveway",
          description: "A sample scope follows the foot traffic along one edge of a driveway into a short front walk. The joints at each end can be marked to keep the boundary clear beside the rest of the parking area.",
        },
        {
          title: "Rear patio alongside a garage",
          description: "A slab runs almost to the back door. An example quote could consider the patio after reviewing photos of the gate, threshold and any slope toward the garage. The owner can compare it with the front wash.",
        },
      ],
      sampleReviews: [
        "We asked about the part guests walk on instead of the full driveway.",
        "The rear patio had its own route around the garage in the plan.",
      ],
    },
    cta: {
      title: "Mark the Route You Use Every Day",
      description: "Send a Severn photo showing the driveway and the place you turn toward your door. Add a rear view if the patio is also on your list.",
    },
  },
  {
    name: "Silver Spring",
    introduction: "In Silver Spring, a single mailing area covers very different streets and housing. A porch beside a shared pathway and a newer patio behind the house need different scopes. Send a street address and a photo showing where each surface fits on the property.",
    metaDescription: "Power Washing in Silver Spring for porch entries, shared approaches and patios. KrasPro checks the finish and access before writing a quote for your property.",
    focusTitle: "Why Silver Spring quotes start with the address and finish",
    paragraphs: [
      "The Silver Spring area includes older detached homes and compact developments in Montgomery County. The address helps establish location, while an overview helps us understand access. A close-up of dirt alone may miss the shared gate, steep step or paved area you need to keep open.",
      "On a painted porch we look near the column bases and along tread edges where water can linger. Tell us whether the cleaning is for routine maintenance, a sale preparation list or upcoming paint work so we can discuss what belongs in the scope.",
    ],
    checklist: ["Address and shared access", "Column bases and painted steps", "Purpose and timing of the wash"],
    faqs: [
      {
        question: "Can a Silver Spring porch be washed ahead of a listing?",
        answer: "Share the target date and known repairs. We can discuss which sound surfaces fit that schedule and which finishes need review first.",
      },
      {
        question: "What if a neighbor owns the shared path?",
        answer: "Talk to the party who controls access and share any arrangements with us. It helps the quote reflect where work and setup can take place.",
      },
      {
        question: "How can I show the condition of a painted column base?",
        answer: "Send a close-up of the seams and a wide porch view. Together they show wear and how the post meets the walking surface.",
      },
    ],
    guide: {
      nearby: ["bethesda", "rockville", "college-park", "laurel"],
      pricingNote: "Several painted edges can require more preparation than a flat slab. If timing is tight, agree on the priority surfaces and access ahead of the visit.",
      examples: [
        {
          title: "Painted entry before an exterior refresh",
          description: "A sample scope reviews sound porch boards and identifies worn paint near a column. The owner could start with the concrete approach while discussing the wood finish separately with the person handling paint preparation.",
        },
        {
          title: "Patio beyond a shared side entrance",
          description: "A paved terrace borders a route used by neighbors. The scope could specify when the gate is available and identify the edge where the private pavement ends so the shared route remains usable.",
        },
      ],
      sampleReviews: [
        "The painter could see which areas still needed preparation.",
        "We agreed on use of the side gate before setting a date.",
      ],
    },
    cta: {
      title: "Send the Address and a View of the Whole Entry",
      description: "Show the Silver Spring street approach and a close-up of the finish. Mention any shared access or time constraints.",
    },
  },
  {
    name: "Sparks",
    introduction: "At a Sparks property, a patio can sit near the house while the closest working tap is on a garage elsewhere on the lot. Describe the distance and available route from parking. We build the estimate around how equipment can actually reach the work.",
    metaDescription: "Power Washing in Sparks for patios, deck landings and detached garage aprons. KrasPro plans around setup distance and surface condition for a written quote.",
    focusTitle: "Why we map the route to outdoor areas in Sparks",
    paragraphs: [
      "On some northern Baltimore County lots, a drive connects the house to a garage or outbuilding. The opening that looks easiest from the backyard may go through a tight garden or up a steep grade. Send a view from the drive and identify where a tap is available.",
      "The wash itself may focus on a single spot beneath trees. Trace the path from that surface to the door and point out raised edges or moss along stone joints. That helps us see where a paved area changes to wood, soil or gravel.",
    ],
    checklist: ["Tap location and equipment route", "Pavement joints at transitions", "Deck landing and access to the door"],
    faqs: [
      {
        question: "Can you use a tap by a detached building?",
        answer: "Tell us which connection is available and roughly how far it is from each surface. We can review whether the route works for the visit.",
      },
      {
        question: "How should I describe moss at paving edges?",
        answer: "Take a photo showing the edge and any loose stones or failing joint fill. Surface condition helps guide the cleaning scope.",
      },
      {
        question: "Can the crew avoid using the side lawn for access?",
        answer: "Show the paved routes and any gates. We can discuss a suitable approach for the location and the areas you want kept clear.",
      },
    ],
    guide: {
      nearby: ["parkton", "phoenix", "lutherville-timonium", "reisterstown"],
      pricingNote: "List how far apart the requested surfaces are. A small apron by a detached structure may take a separate setup from the backyard.",
      examples: [
        {
          title: "Patio reached from the far side of a garage",
          description: "A possible scope starts at parking, passes the garage and reaches a patio behind a gate. The plan checks the route and gate width before deciding which pavement and joints can be included.",
        },
        {
          title: "Wood landing beside a lawn",
          description: "A narrow deck landing sits between wood stairs and a patch of grass. The landing could be reviewed for moisture wear and quoted separately from a short concrete path connecting to it.",
        },
      ],
      sampleReviews: [
        "The photo from the drive showed the distance more clearly than the close-up.",
        "We could decide about the landing before adding the whole deck.",
      ],
    },
    cta: {
      title: "Point Out the Tap and the Best Route In",
      description: "For Sparks, share a driveway overview and a second photo of the priority surface. Include the distance to the outdoor tap.",
    },
  },
  {
    name: "Towson",
    introduction: "A Towson yard may have a brick walk shaded by trees and a porch made of a different material. Once dry leaves come off the walk, the joints and steps can tell a different story. We plan around the entrance, grade and finishes you want cleaned.",
    metaDescription: "Power Washing in Towson for brick paths, shaded steps and porch entries. KrasPro reviews joints, coatings and access before setting out a clear written quote.",
    focusTitle: "Why we check shaded joints on Towson walks",
    paragraphs: [
      "Older Towson properties can have brick or stone details beside a newer concrete slab. Plant growth over a shaded joint can conceal a depression or loose paving. We check the walk and the condition of any adjacent steps before setting the limits of the wash.",
      "A front path may be used throughout the day, particularly near busy residential streets or campus-area housing. Tell us whether another entry is available and mark the part of the route that belongs to your property so we can plan setup.",
    ],
    checklist: ["Brick joints and low spots", "Walk-to-porch material change", "Alternate entry during the wash"],
    faqs: [
      {
        question: "Should a mossy walk be washed if some joints are open?",
        answer: "We check the joints before choosing a method. Show where the growth appears and tell us whether any brick moves underfoot.",
      },
      {
        question: "Can the basement steps be priced on their own?",
        answer: "Yes. Show the stair run and bottom landing, including a nearby drain or doorway.",
      },
      {
        question: "Will a covered porch dry at the same rate as a walk?",
        answer: "Exposure and material influence drying. Mention any timing limits for the entry when you ask for a scope.",
      },
    ],
    guide: {
      nearby: ["lutherville-timonium", "pikesville", "phoenix", "baltimore"],
      pricingNote: "A brick path with steps and landings requires different setup from a level slab. Ask to price the upper landing and walk individually.",
      examples: [
        {
          title: "Brick walk under a tree canopy",
          description: "An example scope reviews joints where moss holds moisture near a step edge. Stable portions could be considered first while any loose brick goes into a maintenance discussion ahead of more extensive work.",
        },
        {
          title: "Basement steps beside the main approach",
          description: "A lower entrance sits down a short stair run near the front walk. The quote can review the drain at the bottom and how water reaches the door before adding these steps as an option.",
        },
      ],
      sampleReviews: [
        "The scope identified the route we needed to keep clear.",
        "We discussed the loose bricks before they went on the wash quote.",
      ],
    },
    cta: {
      title: "Show Which Path Everyone Uses",
      description: "Send a Towson photo of the approach from the curb and a close view of the joints. Tell us whether another entrance is available.",
    },
  },
  {
    name: "Westminster",
    introduction: "A Westminster house can have a painted porch close to the street and a newer deck or slab behind it. Tell us which space you want ready first and which surfaces are already on your repair list. We can plan the wash in the same order.",
    metaDescription: "Power Washing in Westminster for painted porches, newer slabs and decks. KrasPro reviews finish condition and access before preparing a written quote by surface.",
    focusTitle: "Why we plan which Westminster surface to wash first",
    paragraphs: [
      "Older homes around Westminster can have detailed trim that deserves close inspection before it is washed. On a broader Carroll County yard, a rear slab may be easier to clean even if farther from parking. We start by discussing what you want to use right away.",
      "Where concrete, wood and painted trim meet, the condition of each finish helps set the sequence. A sound rear area might go first while the owner arranges attention for worn front treads. Photos of the full access routes also help make the options clear.",
    ],
    checklist: ["Front and rear wash priorities", "Age and finish of each surface", "Access to a slab or deck"],
    faqs: [
      {
        question: "What if washing is part of a porch renovation?",
        answer: "Tell us the repair order and finish you intend to keep. We can discuss which cleaning makes sense at each stage.",
      },
      {
        question: "Why does concrete beside the deck have a different stain?",
        answer: "Exposure and material can affect what appears. Send photos of both surfaces and tell us where water drips off the decking.",
      },
      {
        question: "Can washing tell me whether to keep old porch boards?",
        answer: "It helps to assess the wood before cleaning. Point out soft or moving boards so condition and repairs can be considered up front.",
      },
    ],
    guide: {
      nearby: ["finksburg", "mt-airy", "frederick", "reisterstown"],
      pricingNote: "Ask for prices by area if old and new surfaces need separate checks. Compare the slab scope with one involving painted steps or detailed joins.",
      examples: [
        {
          title: "Painted front steps with worn edges",
          description: "A sample scope records where paint is lifting and where coverage is still sound. The front walk could go on the first quote while the condition of the painted steps is reviewed with other porch maintenance.",
        },
        {
          title: "Newer slab beside a refreshed deck",
          description: "A recently paved area and newer boards show different types of dirt. A possible quote lists each separately and records prior sealing and staining so the work can be discussed around the actual finishes.",
        },
      ],
      sampleReviews: [
        "We could start with the rear slab while planning the front porch.",
        "The scope called out the painted risers as a separate check.",
      ],
    },
    cta: {
      title: "Tell Us What You Want Ready First",
      description: "Send a Westminster front and rear view. Identify the area you want to use soonest and any repairs that should happen before washing.",
    },
  },
] satisfies CityCopy[];

