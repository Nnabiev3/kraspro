import type { ServiceLocation } from "./service-locations";

type PaintingCity = Omit<ServiceLocation, "serviceSlug" | "locationSlug" | "status" | "title"> & {
  name: string;
  metaDescription: string;
};

export const paintingCities: PaintingCity[] = [
  {
    name: "Baltimore",
    metaDescription: "Plan exterior painting for a Baltimore rowhouse, including painted cornices, window casings and wood trim against brick.",
    introduction: "Give your Baltimore rowhouse a sharper street-facing finish. KrasPro can review peeling paint and damaged wood at the cornice, window surrounds and front entry in one visit.",
    focusTitle: "Where painted rowhouse trim meets brick",
    paragraphs: [
      "Street-level photos can miss the underside of a cornice and the top edges of upper window casings. Photograph the entire front, then mark where the finish is flaking or open joints are visible. For a rear elevation, include alley and gate access so the estimate can account for reaching the work.",
      "Keep window trim, doors and previously painted masonry separate in the scope. If you are considering a color change on a designated property, check Baltimore's historic preservation guidance for that address before buying paint or ordering trim."
    ],
    checklist: ["Cornice and window casings", "Previously painted surfaces", "Front sidewalk and rear access"],
    faqs: [{ question: "Can I repaint the woodwork and leave the brick exposed?", answer: "Yes. Identify the wood pieces to include so the estimate can define the boundary and the protection needed for the adjoining brick." }],
  },
  {
    name: "Bel Air",
    metaDescription: "Refresh a Bel Air front porch with a coordinated plan for painting, column-base repairs and worn rail components.",
    introduction: "The porch floor, column bases and railing meet at the spots that often show wear first. Start your Bel Air exterior painting project by looking closely at those connections.",
    focusTitle: "Keep the porch columns and rails in proportion",
    paragraphs: [
      "Look at the bottom of each post from the steps and from inside the porch. A split in a decorative base cover can call for a different scope from deterioration in the post behind it. Include photographs of any loose rail ends and the floor directly beneath the columns.",
      "Decide which pieces should match existing profiles. A porch repaint can include several different surfaces, from vertical balusters to the walking surface, so ask the estimate to identify where different finishes or repairs apply."
    ],
    checklist: ["Post bases and adjacent porch boards", "Rail ends and matching profiles", "Floor and vertical finish specifications"],
    faqs: [{ question: "Can the quote separate porch repairs from repainting?", answer: "Yes. List each affected column, rail section or floor area so the carpentry and painting can be described separately." }],
  },
  {
    name: "Bethesda",
    metaDescription: "Compare maintenance and repainting options for Bethesda homes with stained cedar siding and painted exterior trim.",
    introduction: "If your Bethesda home has cedar siding, the existing finish and the look you want should guide the estimate. Include painted window trim in the discussion so the two finishes work together.",
    focusTitle: "Choose how much cedar grain to show",
    paragraphs: [
      "Take photos of a sheltered board and a board exposed to full sun. A sheltered section may give a better clue to the original color. Note whether you want to keep the grain visible or move toward a more uniform finish.",
      "Mark any split boards and places where cedar meets painted trim. The estimate can account for sample areas, possible board repairs and how the transition at a corner or window will look when the work is complete."
    ],
    checklist: ["Existing cedar finish", "Sun-exposed and sheltered boards", "Samples next to window trim"],
    faqs: [{ question: "Can I compare two finishes before deciding?", answer: "Ask about a sample on a representative section. Compatibility with the existing coating and the condition of the cedar affect which finishes are practical." }],
  },
  {
    name: "Catonsville",
    metaDescription: "Scope exterior wood sill repair and window trim painting for a Catonsville home, with profiles and window operation considered.",
    introduction: "A worn sill can make the entire window surround look tired. For exterior painting in Catonsville, document how the sill, casing and storm window fit together.",
    focusTitle: "Check the lower edge of the window first",
    paragraphs: [
      "Show the end of the sill and the underside where it meets the wall. Include the storm window, screen or other parts you want to retain. Those details help determine which pieces can be prepared in place and which should be considered for carpentry.",
      "Photograph a sound window on the same facade if others have already been patched. Its profile gives a reference for the sill projection and casing shape, particularly when several windows need a consistent finish."
    ],
    checklist: ["Condition at sill ends", "Storm window or screen clearance", "Sound trim to use as a reference"],
    faqs: [{ question: "Do I have to replace the window to address its exterior sill?", answer: "A separate sill repair may be possible. The condition of the sill, frame and nearby material determines the options." }],
  },
  {
    name: "College Park",
    metaDescription: "Plan painting and exterior carpentry for a College Park home with a narrow side yard or limited access.",
    introduction: "Limited space beside the house can shape a College Park painting project as much as the finish. Include the side gate, window trim and other areas that are hard to reach in your inquiry.",
    focusTitle: "Plan for the hard-to-reach side of the house",
    paragraphs: [
      "Take a photo down the full side passage with the gate open. Include stairs, air-conditioning equipment or a fence that narrows the space. This helps establish how workers can reach upper siding and where paint preparation can take place.",
      "List the high areas that also need carpentry, such as the rake trim above a second-story window. Combining that work with the painting discussion allows the quote to account for the same access and protection needs."
    ],
    checklist: ["Side gate and passage width", "Equipment and obstacles", "High trim needing repair"],
    faqs: [{ question: "Should I include photos of the neighboring fence?", answer: "Include it if it limits access to the wall. A wide photograph helps show the space available and what needs protecting." }],
  },
  {
    name: "Columbia",
    metaDescription: "Prepare an exterior repaint in Columbia with paint samples, a surface list and proposed repairs for your village review if it applies.",
    introduction: "Put your proposed siding, trim and door colors in one place before planning exterior painting in Columbia. Include any trim changes so you can explain the complete appearance.",
    focusTitle: "Prepare a color schedule by surface",
    paragraphs: [
      "Photograph the front and rear elevations and label each color with the surfaces it will cover. Record the manufacturer, color name and sheen for the siding, trim, shutters and door. Physical samples can help you judge the palette against the roof and masonry.",
      "If village or association review applies at your Columbia address, get the current instructions before ordering paint. Highlight any trim repair that would change the size or profile of a visible piece so it can be discussed with the rest of the project."
    ],
    checklist: ["Color codes and sheen by surface", "Existing and proposed trim details", "Current village documents if applicable"],
    faqs: [{ question: "What should I collect for an exterior color submission?", answer: "Start with your village's current instructions. Photos, labeled samples and a list of the affected surfaces help describe the proposed change." }],
  },
  {
    name: "Dundalk",
    metaDescription: "Scope exterior painting and wood repairs around a Dundalk rear entry, including the threshold, casing and porch enclosure.",
    introduction: "Give the rear entrance of your Dundalk home the same attention as the front. Peeling paint near a screen door, low jamb or porch panel can point to several distinct repair areas.",
    focusTitle: "Trace wear around the back-door threshold",
    paragraphs: [
      "Photograph the lower corners with the main door and screen door open. Show where the threshold meets the landing and whether a mat or trim piece hides part of the joint. If damage is concentrated at one corner, note when it tends to get wet.",
      "Where a porch has been enclosed, identify which pieces are original wood, newer panels or metal framing. The quote can then define the wood repairs and the separate surfaces to prepare and repaint."
    ],
    checklist: ["Lower casing and threshold", "Screen door operation", "Porch panels and framing materials"],
    faqs: [{ question: "Can the rear entry be estimated on its own?", answer: "Request it as a defined area and send a wide photo of the entry. Include any trim runs or porch surfaces you would like priced with it." }],
  },
  {
    name: "Ellicott City",
    metaDescription: "Plan an exterior repaint in Ellicott City that accounts for decorative wood brackets, gable trim and the profiles you want to keep.",
    introduction: "For an Ellicott City home with decorative brackets or shaped gable trim, document those details before settling on the paint and carpentry scope.",
    focusTitle: "Preserve the shape of decorative woodwork",
    paragraphs: [
      "Capture a close view of a sound bracket, including its outline and where it attaches. That reference is useful when assessing a damaged match on another corner. Make a separate list of boards, decorative pieces and flat trim so the estimate reflects the level of work each needs.",
      "If the property is in the Ellicott City Historic District, Howard County publishes design guidelines for exterior changes. Compare them with the proposed work as you decide whether to repair an existing detail or consider replacement."
    ],
    checklist: ["Intact bracket or gable profile", "Photos of damaged matching details", "Historic district guidance where applicable"],
    faqs: [{ question: "What if only one bracket is damaged?", answer: "Send a photograph of the damaged piece and an intact match. The attachment and condition of the surrounding wood help determine whether spot repair is practical." }],
  },
  {
    name: "Essex",
    metaDescription: "Identify recurring peeling and moisture exposure before exterior painting at your Essex home, especially at low siding and trim.",
    introduction: "When paint keeps failing in the same area of your Essex home, document where water reaches that spot. KrasPro can use those observations to discuss surface preparation and related wood repairs.",
    focusTitle: "Follow the water before pricing the repaint",
    paragraphs: [
      "Note whether peeling sits beneath a gutter joint, beside a downspout outlet or along a wall next to a paved surface. If you can photograph the area after rain, the splash pattern may help explain why damage appears on one part of the wall.",
      "In the estimate, identify what belongs to the painting and carpentry work and which drainage issues need attention before the new finish goes on. A photo of the entire wall helps show how those elements meet."
    ],
    checklist: ["Peeling pattern and wall orientation", "Downspout outlet and splash zone", "Soft sections near the bottom of the wall"],
    faqs: [{ question: "Will repainting stop the same patch from peeling again?", answer: "The result depends on the underlying surface and exposure. Share what happens after a storm so the moisture source can be considered before the paint scope is set." }],
  },
  {
    name: "Finksburg",
    metaDescription: "Review fascia and soffit condition before painting your Finksburg home, with attention to gutter corners and roof edges.",
    introduction: "A repaint can be a good time to look at the boards behind the gutters. For a Finksburg estimate, show the fascia, soffits and any stained or open joints along the roofline.",
    focusTitle: "Separate roof-edge carpentry from painting",
    paragraphs: [
      "Photograph gutter corners and places where the fascia changes direction. Brown marks on the soffit or a gap along the board edge are useful clues. Include a view from the ground showing the height and any obstructions below the eaves.",
      "Ask the quote to identify lengths of fascia, affected soffit sections and any coordination needed with gutter work. Also point out vented panels so preparation and coating can be planned around the openings."
    ],
    checklist: ["Fascia joints behind gutters", "Soffit panels and vent locations", "Roof-edge access from the ground"],
    faqs: [{ question: "Can fascia be assessed with the gutters still attached?", answer: "Visible edges can be reviewed first. Some areas behind the gutter may need closer access before the full condition is clear." }],
  },
  {
    name: "Frederick",
    metaDescription: "Plan exterior painting for a street-facing home in Frederick around shutters, cornices and historic trim details.",
    introduction: "For a street-facing home in Frederick, decide which shutters, cornices and door surrounds need attention before selecting the finish for the whole facade.",
    focusTitle: "Inventory the front elevation before repainting",
    paragraphs: [
      "Record which shutters operate and which are fixed. Photograph the hardware and the paint line where each shutter meets its surround. A separate inventory for shutters, cornice boards and doors makes it easier to compare quotes for preparation and repairs.",
      "For addresses in the Frederick Town Historic District, consult the city's preservation maps and design guidelines when planning visible exterior changes. Bring photos of intact details if you want the proposed repairs to match the elevation."
    ],
    checklist: ["Shutter condition and hardware", "Cornice and entry trim", "Address and applicable design guidance"],
    faqs: [{ question: "Can shutters be removed for preparation?", answer: "Discuss which shutters operate, how they are attached and whether the hardware should be retained. Those details affect how the work is estimated." }],
  },
  {
    name: "Glen Burnie",
    metaDescription: "Plan exterior painting for a Glen Burnie home with mixed siding materials and painted trim around the windows and eaves.",
    introduction: "A wall with vinyl siding, painted wood trim and a metal wrap needs a clear surface list. For a Glen Burnie project, show where those materials change along each elevation.",
    focusTitle: "Identify the surface before choosing the coating",
    paragraphs: [
      "From the street, a wrapped board and a painted board can look nearly identical. Take closer photos at corners, window edges and the underside of eaves. Include adjacent areas you intend to keep as they are.",
      "Discuss whether the finish should match across surfaces or make the trim stand out. Material and coating compatibility can affect the options, so the written scope should identify each surface included and any woodwork needing repair."
    ],
    checklist: ["Material changes around openings", "Existing wraps and coated trim", "Surfaces to include in the paint scope"],
    faqs: [{ question: "Can I paint only the trim around my siding?", answer: "That can be a defined scope. Photos of the edges and the trim material help establish how the siding will be protected during the work." }],
  },
  {
    name: "Hanover",
    metaDescription: "Compare repainting and trim repair around a Hanover garage opening, from jamb ends to the overhead door surround.",
    introduction: "If the garage door takes up much of your Hanover home's front elevation, worn casing can spoil an otherwise sound finish. Start the estimate at the lower jambs.",
    focusTitle: "Refresh the garage surround and keep the door working",
    paragraphs: [
      "Show the casing where it meets the driveway and the seal where it meets the door. Photograph the top corners as well. Swollen trim, a worn seal and a deteriorated jamb are different items, even when they appear next to one another.",
      "Specify whether the overhead door should be coated or left in its existing finish. If the surrounding boards need replacement, compare the intended profile with the entry and window trim elsewhere on the front of the house."
    ],
    checklist: ["Lower jambs and driveway contact", "Door seals and top corners", "Surround color and profile"],
    faqs: [{ question: "Can you repaint the garage surround while keeping the door color?", answer: "Yes. List the frame and casing as the paint surfaces and include a photo so the transition at the door can be reviewed." }],
  },
  {
    name: "Laurel",
    metaDescription: "Scope painting and corner-board repairs for your Laurel home using photos of the siding joints and the affected elevations.",
    introduction: "When peeling is concentrated at the corners of a Laurel home, inspect the board edges and the siding that meets them before pricing a full exterior repaint.",
    focusTitle: "Look for movement where siding meets the corners",
    paragraphs: [
      "Take one photo across the wall and another along the corner. A side view can reveal a board that has pulled away from the wall or a joint that repeatedly opens. Mark whether the issue starts near grade, under a roof return or in the middle of a wall.",
      "If only the corner boards need carpentry, make sure the estimate describes the transition to the adjacent siding and the finish on both faces. For a targeted repaint, compare the proposed color to the actual exterior in daylight."
    ],
    checklist: ["Corner board straightness and end condition", "Adjacent siding joints", "Daylight color match"],
    faqs: [{ question: "Is a color code enough for touching up one corner?", answer: "It is a starting point. Weathering and sheen can change the appearance, so compare a sample against both adjoining faces before choosing the paint boundary." }],
  },
  {
    name: "Lutherville-Timonium",
    metaDescription: "Plan exterior door and sidelight painting in Lutherville-Timonium with casing repairs and finish details included.",
    introduction: "Refresh your Lutherville-Timonium entry by treating the door, sidelights and outer casing as a group. The estimate can account for repairs where those components meet.",
    focusTitle: "Give the entry a consistent finish",
    paragraphs: [
      "On a paneled door, note where the finish is worn around the handle and which edges rub when the door closes. For sidelights, show the lower corners, the glass stops and the trim that ties them into the entry surround.",
      "Choose whether the panel color should match the casing or stand apart. Point out hardware and weatherstripping you want retained so the work can be planned without interfering with the fit of the door."
    ],
    checklist: ["Panel edges and rub marks", "Sidelight stops and lower casing", "Hardware and weatherstripping to retain"],
    faqs: [{ question: "Can the outside of my entry door be painted a different color from the inside?", answer: "Discuss where each finish should end on the edges. The door swing and what you see when it is open help guide that choice." }],
  },
  {
    name: "Mt. Airy",
    metaDescription: "Plan an exterior repaint in Mt. Airy around exposed gables, weathered rake boards and high trim repairs.",
    introduction: "For a Mt. Airy home with exposed gables, take a close look at the rake boards and roof returns before deciding how much of the exterior to paint.",
    focusTitle: "Check the upper trim where rooflines change",
    paragraphs: [
      "Take a wide photo of each gable to show its height and the terrain below it. Then capture any visible splits or failed joints at the roof returns from a safe position on the ground. Identify the sides that get the most direct sun or rain.",
      "Scope high trim work with the repaint so the quote can describe access, localized carpentry and the finish on the repaired pieces together. If two rooflines meet, show each approach to the area in your photographs."
    ],
    checklist: ["Rake boards and roof returns", "Ground clearance and working height", "Paint and repairs for each gable"],
    faqs: [{ question: "Do I need to climb a ladder to photograph the gable?", answer: "A ground-level overview and a zoomed photo are enough to start the conversation. Include the grade below the wall so access can be considered." }],
  },
  {
    name: "Owings Mills",
    metaDescription: "Plan a phased exterior repaint in Owings Mills around siding condition, trim repairs and natural breaks between elevations.",
    introduction: "If the sunny side of your Owings Mills home is aging faster than the rest, compare the walls individually. That makes it easier to decide where to repair trim and where to repaint.",
    focusTitle: "Plan a repaint by elevation",
    paragraphs: [
      "Walk around the property and mark the condition of the siding, window trim and corner boards on each side. Where the coating still looks sound, note how it meets the section that needs attention. Verify the color and sheen on site if previously painted surfaces are to remain.",
      "If the work will be done in stages, choose clear endpoints at corners or changes in material. Ask for those endpoints in the written scope and note any association requirements for a color change if they apply."
    ],
    checklist: ["Coating condition on each elevation", "Repair locations and paint boundaries", "Finish matching across phases"],
    faqs: [{ question: "Can I repaint the west side this year and quote the rest later?", answer: "Discuss a phased scope and pick a natural place for the new finish to end. A sample next to the surface that will remain can help you judge the transition." }],
  },
  {
    name: "Parkton",
    metaDescription: "Review porch ceiling boards, perimeter trim and finish wear before an exterior painting or carpentry project in Parkton.",
    introduction: "A covered porch in Parkton may have peeling ceiling paint even when the outer trim looks sound. Show both the sheltered boards and the edges exposed to rain when requesting a quote.",
    focusTitle: "Inspect the ceiling and porch roof together",
    paragraphs: [
      "Identify whether gaps follow the beadboard joints or are concentrated at the perimeter. Photograph the area above any stain from the ground if visible. This helps the discussion cover likely water entry and the condition of the ceiling before repainting.",
      "If some boards need repair, capture the existing bead spacing and where the pattern ends at the wall. Include any fixtures or fan mounts so the scope describes how those details will be handled."
    ],
    checklist: ["Ceiling stains and board joints", "Beadboard pattern and perimeter trim", "Locations of lights and fans"],
    faqs: [{ question: "Can I keep the beadboard pattern if only a few boards need work?", answer: "A matching profile can be discussed after seeing the existing boards. The condition of adjacent boards and the way they join affect the repair options." }],
  },
  {
    name: "Phoenix",
    metaDescription: "Scope painting for a shaded exterior in Phoenix, Maryland, including persistent staining, damp trim and the condition of lower boards.",
    introduction: "For a Phoenix property where part of the exterior stays shaded, show how the sheltered elevations differ from the sunny ones before planning preparation and carpentry.",
    focusTitle: "Assess shaded siding after it has dried",
    paragraphs: [
      "Take one image showing the full wall, including nearby vegetation, and one showing any patch that stays damp or discolored. Note if the area is sheltered by a roof or receives water from sprinklers. The pattern helps distinguish locations that need cleaning from those that need further review.",
      "Photograph the lower trim and board ends where staining is most visible. Discuss protection for nearby planting and allow for the surface condition and weather when scheduling the finish."
    ],
    checklist: ["Shade, vegetation and watering patterns", "Coating condition at lower board ends", "Plant protection and drying conditions"],
    faqs: [{ question: "How should I show a mark that fades as the siding dries?", answer: "Photograph it while visible and again from the same angle after the wall dries. Note how long the area typically stays damp." }],
  },
  {
    name: "Pikesville",
    metaDescription: "Plan exterior trim painting and wood repairs around a Pikesville bay window, including its skirt, joints and adjoining finishes.",
    introduction: "A projecting bay window adds several edges to prepare and paint. For a Pikesville estimate, show the bay from both sides and include its underside.",
    focusTitle: "Treat the bay as a small exterior of its own",
    paragraphs: [
      "A bay may include several materials within a few feet, from painted casing to a metal cap or a paneled skirt. Make a list of the areas showing flaking, open seams or damage so the quote can distinguish finish work from possible carpentry.",
      "Decide how the trim color should wrap around the projection and meet the adjacent cladding. Include a picture of a matching window elsewhere on the house if you want the profiles and paint lines to follow it."
    ],
    checklist: ["Skirt and underside condition", "Joints around the projection", "Matching trim on other windows"],
    faqs: [{ question: "Should I include the roof cap above the bay in the photos?", answer: "Yes, if you can see it safely from the ground. Show where it meets the wall, especially if wear or staining appears directly below." }],
  },
  {
    name: "Reisterstown",
    metaDescription: "Request an exterior painting and carpentry scope in Reisterstown for clapboard siding, isolated board damage and matching trim.",
    introduction: "If your Reisterstown home has a few deteriorated clapboards, map them before deciding on the repaint. KrasPro can assess those sections alongside the surrounding boards and trim.",
    focusTitle: "Decide which clapboards can stay",
    paragraphs: [
      "Photograph the full elevation and circle individual boards with splits, lifted ends or recurring peeling. Measure the visible height of a sound board if you can reach it safely. That dimension helps identify the siding profile and how a replacement would align.",
      "Look at the joint between a questionable board and the nearest window or corner. The estimate can distinguish preparation on sound siding from selective repairs and define where the finish will carry across the elevation."
    ],
    checklist: ["Damaged boards mapped on the elevation", "Visible height and profile of sound clapboards", "Connections at windows and corners"],
    faqs: [{ question: "Can individual siding boards be priced before a full repaint?", answer: "Share the locations and a view of adjacent boards. The estimate can identify visible repairs separately and explain where closer inspection is needed." }],
  },
  {
    name: "Rockville",
    metaDescription: "Prepare a clear scope for Rockville exterior painting with an elevation-by-elevation surface list, preparation and carpentry line items.",
    introduction: "Compare exterior painting quotes for your Rockville home using the same scope. Start with the surfaces that need coating and the woodwork that needs a closer look.",
    focusTitle: "Make two painting estimates comparable",
    paragraphs: [
      "Mark siding, shutters, fascia and doors on one set of elevation photos. For each elevation, note where the finish is peeling and whether a previous repair is visible. Send the same marked photos with each request so the quoted areas line up.",
      "Ask how each estimate describes preparation, primer where appropriate, finish coats and potential carpentry. If concealed damage could change the price, ask how discoveries will be documented and approved during the job."
    ],
    checklist: ["Same surface list for each quote", "Preparation and coating specifications", "Process for additional repairs"],
    faqs: [{ question: "What should I look for when one exterior quote is much lower?", answer: "Compare the areas covered, access and protection, proposed preparation and how each estimate treats damaged trim. Those details can account for a large difference in price." }],
  },
  {
    name: "Severn",
    metaDescription: "Plan wood repair and exterior painting in Severn at the bottom of siding, where trim meets mulch, paving or a patio.",
    introduction: "For a Severn exterior that shows wear near mulch or patio paving, take photos at ground level. The condition of the first siding course can affect the painting and repair scope.",
    focusTitle: "Look where the wall meets the landscape",
    paragraphs: [
      "Show the distance between the bottom of the siding and the surface below it. Mark any stretch of wall where mulch, soil or paving sits higher than it does elsewhere. Photograph the corners of a raised bed or patio where splash marks are concentrated.",
      "Include any irrigation heads or planting you plan to move. The estimate can identify which bottom boards or trim sections need review and what should be addressed at the perimeter before preparation begins."
    ],
    checklist: ["Siding clearance above grade", "Raised beds and patio edges", "Bottom boards with visible damage"],
    faqs: [{ question: "Do you need to see behind the mulch?", answer: "Start with a picture of the existing grade and a close view of the siding edge if it is visible. That helps identify where a closer assessment is needed." }],
  },
  {
    name: "Silver Spring",
    metaDescription: "Plan exterior painting across an original Silver Spring house and a newer addition, with compatible finishes at the transition.",
    introduction: "An addition may age differently from the original exterior. For a Silver Spring painting estimate, show the transition between old and new and note which appearance you want to carry through.",
    focusTitle: "Tie two parts of the house together with paint",
    paragraphs: [
      "Photograph the point where the addition joins the original wall. Look for changes in siding texture, window casing width and the alignment of corner boards. Those differences affect how the same color looks across the joint.",
      "Discuss whether you want the two wall sections to read as one facade or use the transition as a color break. Bring any plans for trim replacement into that discussion before settling on samples."
    ],
    checklist: ["Transition between old and new siding", "Trim width and texture", "Paint samples viewed across both surfaces"],
    faqs: [{ question: "Can the addition and original house use different coating products in the same color?", answer: "That may be appropriate when the surfaces differ. Compare the samples on both materials because sheen and texture can affect the match." }],
  },
  {
    name: "Sparks",
    metaDescription: "Scope exterior painting for a Sparks home with painted woodwork beside stone, focusing on trim repairs and paint boundaries.",
    introduction: "Where painted wood meets stone on your Sparks home, clarify which surfaces belong in the scope. Include close-ups of worn trim around openings and roof returns.",
    focusTitle: "Plan clean paint lines around stone",
    paragraphs: [
      "Photograph a few representative edges where trim meets the masonry, including the bottom of a window and the side of an entry if they are affected. Irregular stone joints can change how trim is fitted and how adjoining surfaces are protected.",
      "If a piece needs replacement, show the profile and whether the neighboring woodwork is intended to match. Agree where coatings should stop at the masonry and which sections of wood should be prepared together."
    ],
    checklist: ["Trim-to-stone junctions", "Width and shape of adjacent woodwork", "Protection and paint boundaries"],
    faqs: [{ question: "Will a trim repair change the visible paint line against the stone?", answer: "The profile and fit of the replacement can affect the line. Review an intact opening or existing edge as a reference before selecting the repair detail." }],
  },
  {
    name: "Towson",
    metaDescription: "Plan exterior painting for a Towson split-level or multilevel house with access and trim repairs scoped by wall height.",
    introduction: "A Towson house with several floor levels may have low windows on one side and a tall wall above a walkout on the other. Show the differences when asking for an exterior quote.",
    focusTitle: "Match painting access to each wall",
    paragraphs: [
      "Take a side photo from the lowest part of the yard, then another that shows how the grade changes around the next corner. Include walkout steps, retaining walls or window wells that could affect access beneath the painted surfaces.",
      "Mark the second-story trim that needs carpentry and note which entrances you use daily. The quote can then address work at height and consider how the affected entries can be used while the project is underway."
    ],
    checklist: ["Wall height above the lowest grade", "Retaining walls and window wells", "Upper trim and daily access routes"],
    faqs: [{ question: "Does the same size wall cost the same on every side?", answer: "Height, the ground below and the amount of preparation can differ. Include photos from each side so access and repairs can be priced for that elevation." }],
  },
  {
    name: "Westminster",
    metaDescription: "Coordinate exterior painting on a Westminster house and detached garage, with separate prep and carpentry for each building.",
    introduction: "Refresh your Westminster house and detached garage with a shared palette. List the siding and trim repairs by building so the estimate reflects the condition of each one.",
    focusTitle: "Carry one palette across two buildings",
    paragraphs: [
      "Start with a photo that includes the house and garage together. Then photograph their coatings separately and note where sunlight falls during the day. With different siding textures or levels of shade, a sample can look different from one building to the next.",
      "If the garage has worn door casing or a deteriorated trim board, record it separately from repairs on the house. A quote organized by building helps you decide which work to combine and which can be scheduled separately."
    ],
    checklist: ["Joint view of house and garage", "Surface and trim inventory by building", "Color samples under different light"],
    faqs: [{ question: "Do both buildings need the same sheen?", answer: "Compare how the finishes look against the siding texture and existing trim on each building. A coordinated color scheme can use different finishes where the surfaces call for them." }],
  },
];
