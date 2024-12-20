document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Look@Utech! The app is now loaded.");
});

// Define all locations with their coordinates
const locations = {
    "Juicy Patties": { lat: 18.0197939, lng: -76.743253 },
    "Construction lab 7C": { lat: 18.0235293, lng: -76.7451838 },
    "Electrical Lab 7B": { lat: 18.0189345, lng: -76.7443089 },
    "Mechanical  lab 7A": { lat: 18.0189133, lng: -76.7443191 },
    "FELS female bathroom": { lat: 18.0192749, lng: -76.7434085 },
    "FELS male bathroom": { lat: 18.0187302, lng: -76.7434468 },
    "ADPM lab 8A4": { lat: 18.0185948, lng: -76.7434805 },
    "Food Servive Production LAB 8A6": { lat: 18.0186017, lng: -76.7433123 },
    "LT 9 ": { lat: 18.0185463, lng: -76.7434929 },
    "Graduate Studies": { lat: 18.0185435, lng: -76.7433084 },
    "8C7A": { lat:18.0186077, lng: -76.743274 },
    "8C8A": { lat: 18.0185253, lng: -76.7430437 },
    "8C6A": { lat: 18.0186077, lng: -76.743274 },
    "GRADUATE STUDENTS LOUNGE": { lat: 18.0186776, lng: -76.74348 },
    "CONFERENCE ROOM ": { lat: 18.0186873, lng: -76.7436165 },
    "FELS OFFICE": { lat: 18.0186166, lng: -76.7436049 },
    "8C3": { lat: 18.0186928, lng: -76.7437266 },
    "8C2": { lat: 18.0187027, lng: -76.7437066 },
    "8C11": { lat:18.018654, lng: -76.7437184 },
    "8C12": { lat:18.0186232, lng: -76.7437397 },
    "8C1": { lat: 18.0187835, lng: -76.743782 },
    "8B1A": { lat: 18.0186525, lng: -76.7437443 },
    "8B1B": { lat: 18.0185394, lng: -76.7436981 },
    "STUDIO": { lat: 18.0186187, lng:-76.7437351 },
    "8B2": { lat: 18.0186722, lng: -76.7437323 },
    "Studio 2": { lat: 18.0186624, lng: -76.7437374 },
    "FELS Office (2nd Floor)": { lat: 18.0188693, lng: -76.7437146 },
    "8A3": { lat: 18.0187895, lng: -76.743572 },
    "8A2": { lat: 18.0187895, lng: -76.743572 },
    "8A1": { lat: 18.0185652, lng: -76.7436775 },
    "8A1 Drawing Room": { lat: 18.0185191, lng: -76.7437669 },
    "8A4W": { lat: 18.01854772, lng: -76.7438011 },
    "8A12": { lat: 18.01853444, lng: -76.7437625 },
    "LT48": { lat: 18.01886505, lng: -76.74443482 },
    "LT49": { lat: 18.01898097, lng: -76.74454122 },
    "LT50": { lat: 18.0191555, lng: -76.74474334 },
    "Male Bathroom (Lecture Theater)": { lat: 18.01922162, lng: -76.74458515 },
    "Staff Bathroom (Lecture Theater)": { lat: 18.01925381, lng: -76.74460734 },
    "Female Bathroom (Lecture Theater)": { lat: 18.01915084, lng: -76.74465795 },

    // College of Business and Management
    "College of Business and Management Advisement Unit": { lat: 18.01853582, lng: -76.74404041 },
    "Construction Engineering Lab": { lat: 18.01817796, lng: -76.74395313 },
    "Workshop 6": { lat: 18.01821689, lng: -76.74394991 },
    "Thermal Engineering Science (Internal Combustion Lab) 6A3": { lat: 18.0180763, lng: -76.74395774 },
    "Refrigeration and Air Conditioning Lab 6A1": { lat: 18.0178541, lng: -76.7442195 },

    // School of Business Administration
    "5A1": { lat: 18.01792544, lng: -76.74385495 },
    "5A2": { lat: 18.01781731, lng: -76.74387036 },
    "5A3": { lat: 18.01781177, lng: -76.74384126 },
    "5A4": { lat: 18.01780596, lng: -76.74388917 },
    "5A5 Academic Staff Room": { lat: 18.01771733, lng: -76.74379727 },
    "Bathrooms (5A)": { lat: 18.01787263, lng: -76.74374837 },
    "5A6 School Rep Office": { lat: 18.01769512, lng: -76.74373422 },

    // Second Floor (School of Business Administration)
    "5B6 Academic Staff Room 1": { lat: 18.01772244, lng: -76.74377488 },
    "5B7 Academic Staff Room 2": { lat: 18.0177411, lng: -76.74377454 },
    "5B5": { lat: 18.01768354, lng: -76.74377592 },
    "5B4": { lat: 18.01784577, lng: -76.7438094 },
    "5B8 Bathroom": { lat: 18.01782842, lng: -76.74375118 },

    // Third Floor (School of Business Administration)
    "SOBA Administrative Office": { lat: 18.01790654, lng: -76.74373596 },
    "Business and Management Student Affairs and Advisement Centre": { lat: 18.01806255, lng: -76.74373249 },
    "College of Business and Management Academic Staff Offices": { lat: 18.01806255, lng: -76.74373249 },

    // School of Land Management
    "Female Bathroom (School of Land Management)": { lat: 18.0176065, lng: -76.7436927 },
    "4A17": { lat: 18.0176173, lng: -76.7437005 },
    "4A16B": { lat: 18.0176173, lng: -76.7437005 },
    "4A16A Bachelor of Science in Medical Tech": { lat: 18.0177133, lng: -76.74392 },
    "Male Bathroom (School of Land Management)": { lat: 18.0177133, lng: -76.74392 },
    "4A12": { lat: 18.0177184, lng: -76.7441516 },
    "4A11": { lat: 18.0177184, lng: -76.7441516 },
    "4A10": { lat: 18.0177184, lng: -76.7441285 },
    "Concrete Lab": { lat: 18.0177592, lng: -76.7442823 },
    "4A9": { lat: 18.0177592, lng: -76.7442823 },
    "4A8": { lat: 18.017776, lng: -76.7443219 },
    "FOBE Students' Representatives": { lat: 18.017776, lng: -76.7443219 },
    "4A7": { lat: 18.017776, lng: -76.7443219 },
    "4A6": { lat: 18.0190877, lng: -76.7531188 },
    "Faculty of Built Environment Student Advisement Center": { lat: 18.0177456, lng: -76.7443725 },
    "4A5": { lat: 18.0190877, lng: -76.7531188 },
    "4A4": { lat: 18.0177513, lng: -76.7443561 },
    "4A3": { lat: 18.0177034, lng: -76.7444058 },
    "4A2": { lat: 18.0177034, lng: -76.7444058 },
    "Studio Room": { lat: 18.0176951, lng: -76.7444502 },
    // School of Architecture (2nd Floor)
    "4B2-CSA": { lat: 18.0177307, lng: -76.7444193 },
    "4B3 Reading Room": { lat: 18.0175931, lng: -76.7444829 },
    "School of Building and Land Management Office": { lat: 18.0177159, lng: -76.7444052 },
    "SBLM Conference Room": { lat: 18.0177159, lng: -76.7444052 },
    "Faculty of Built Environment Exam Office": { lat: 18.0176152, lng: -76.7444468 },
    "4B9": { lat: 18.0177427, lng: -76.744387 },
    "4B10 Urban and Regional Planning Office": { lat: 18.0176733, lng: -76.744411 },
    "4B12": { lat: 18.0177118, lng: -76.7442292 },
    "4B8": { lat: 18.0177118, lng: -76.7442292 },
    "4B15": { lat: 18.0177156, lng: -76.7442369 },
    "4B16": { lat: 18.0176956, lng: -76.7443509 },

    // School of Architecture (3rd Floor)
    "4C17 Construction Division": { lat: 18.0176984, lng: null },

    // Hotel
    "Hotel": { lat: 18.01950658, lng: -76.7442006 },

    // Student Activity Center
    "Barber": { lat: 18.01967239, lng: -76.74436526 },
    "Nail Salon": { lat: 18.01975583, lng: -76.74441343 },

    // Nursing
    "Nursing": { lat: 18.02008891, lng: -76.74430994 },

    // Recreation
    "SCIT Gazebo": { lat: 18.018552, lng: -76.7432168 },
    "Sculpture Park": { lat: 18.0184499, lng: -76.743149 },
    "SOBA Gazebo": { lat: 18.0186827, lng: -76.7434519 },

    // SCIT - Ground Level
    "Printery": { lat: 18.018418, lng: -76.7430961 },

    // SCIT - Floor 1
    "2B8": { lat: 18.018418, lng: -76.7430961 },
    "2B6": { lat: 18.018418, lng: -76.7430961 },
    "2B5": { lat: 18.018418, lng: -76.7430961 },
    "2B4": { lat: 18.018418, lng: -76.7430961 },
    "2B3": { lat: 18.018418, lng: -76.7430961 },
    "2B2": { lat: 18.018418, lng: -76.7430961 },
    "2B7": { lat: 18.018418, lng: -76.7430961 },
    "Female Bathroom (SCIT)": { lat: 18.018418, lng: -76.7430961 },
    "Male Bathroom (SCIT)": { lat: 18.018418, lng: 76.7430961 },
    "Student Finances": { lat: 18.018418, lng: -76.7430961 },

    // Shared Facilities
    "Shared Facilities": { lat: 18.01879338, lng: -76.74471365 },

    // UTech Open
    "UTech Open (School of Lifelong Learning and Professional Development)": { lat: 18.01796436, lng: -76.74509144 },

    // Technology Innovation Center (TIC)
    "TIC (Technology Innovation Center)": { lat: 18.01772613, lng: -76.74528706 },

    // UTech Field (Pavilion)
    "UTech Field (Pavilion)": { lat: 18.01697672, lng: -76.74473484 },

    // Faculty of Science & Sport
    "Faculty of Science & Sport": { lat: 18.01662, lng: -76.74568885 },

    // Built Environment
    "Built Environment": { lat: 18.01757471, lng: -76.7442451 },

    // College of Health Sciences
    "College of Health Sciences": { lat: 18.01764823, lng: -76.74381214 },

    // School of Natural and Applied Sciences
    "School of Natural and Applied Sciences": { lat: 18.01762924, lng: -76.74378183 },

    // UTech Pharmacy
    "UTech Pharmacy": { lat: 18.01761604, lng: -76.74385524 },
     // Student Financial Services
     "Student Financial Services": { lat: 18.01790214, lng: -76.7434514 },

     // UTech Administration Building
     "UTech Administration Building": { lat: 18.0179761, lng: -76.74299887 },
 
     // Graduate Studies and Entrepreneurship
     "Graduate Studies and Entrepreneurship": { lat: 18.01891922, lng: -76.74257881 },
 
     // Office of Admissions and Enrolment Management
     "Office of Admissions and Enrolment Management": { lat: 18.01901583, lng: -76.74235051 },
 
     // Human Resources & Administration
     "Human Resources & Administration": { lat: 18.01970779, lng: -76.74238907 },
 
     // Faculty of Law
     "Faculty of Law": { lat: 18.02043443, lng: -76.74188812 },
 
     // Auditorium
     "Auditorium": { lat: 18.0205184, lng: -76.74341084 },
 
     // Pool
     "Pool": { lat: 18.02035602, lng: -76.74361647 },
 
     // Gym
     "Gym": { lat: 18.02076183, lng: -76.74326882 },
 
     // Food
     "Juicy Patties": { lat: 18.0197939, lng: -76.743253 },
     "Venting Machine": { lat: 18.01780908, lng: -76.74377404 },
     "Inzone": { lat: 18.01945757, lng: -76.74413361 },
     "Gilly's": { lat: 18.0197253, lng: -76.7443394 },
     "Voda": { lat: 18.0197982, lng: -76.7444818 },
     "Reggae Jamminz": { lat: 18.01959771, lng: -76.74433433 },
     "BURGER KING": { lat: 18.01953872, lng: -76.74397119 },
     "JOHN SHOP": { lat: 18.01925189, lng: -76.74394005 },
     "SUBMERGE": { lat: 18.0197437, lng: -76.7443484 },
     "VENDING MACHINE": { lat: 18.0177592, lng: -76.7442823 },
     "NECTAR": { lat: 18.01983746, lng: -76.74444613 },
     "Restaurant beside bar": { lat: 18.01983996, lng: -76.7443906 },
     "Vending Machine 1": { lat: 18.01771827, lng: -76.74425432 },
     "Vending Machine 2": { lat: 18.01842434, lng: -76.7429231 },
 
     // Money Transactions
     "VICTORIA MUTUAL": { lat: 18.0190806, lng: -76.7438421 },
     "BILL EXPRESS": { lat: 18.01914545, lng: -76.7437465 },
     "NCB":{lat: 18.0197939, lng: -76.743253 }

};
showCoordinates("Juicy Patties");

// Display the coordinates for a selected location
function showCoordinates(locationKey) {
    const location = locations[locationKey];

    if (!location) {
        alert("Location not found!");
        return;
    }

    const coordinatesDiv = document.getElementById("coordinates-display");
    coordinatesDiv.innerHTML = `
        <h3>${locationKey}</h3>
        <p>Latitude: ${location.lat}</p>
        <p>Longitude: ${location.lng}</p>
        <p>Copy and paste these coordinates into the map on the homepage for directions.</p>
    `;
    coordinatesDiv.style.display = "block";
}
