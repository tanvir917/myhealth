const parameters=['back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine',
    'yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach',
    'swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
    'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
    'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool',
    'irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs',
    'swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
    'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips',
    'slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
    'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness',
    'weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine',
    'continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
    'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain',
    'abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum',
    'rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion',
    'receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen',
    'history_of_alcohol_consumption','fluid_overload','blood_in_sputum','prominent_veins_on_calf',
    'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
    'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose',
    'yellow_crust_ooze']

    const symtomps = [
      {
        id: 0,
        name: 'Back Pain',
      },
      {
        id: 1,
        name: 'Constipation',
      },
      {
        id: 2,
        name: 'Abdominal Pain',
      },
      {
        id: 3,
        name: 'Diarrhoea',
      },
      {
        id: 4,
        name: 'Mild fever',
      },
      {
        id: 5,
        name: 'Yellow Urine',
      },
      {
        id: 6,
        name: 'Yellowing of eyes',
      },
      {
        id: 7,
        name: 'Acute liver failure',
      },
      {
        id: 8,
        name: 'Fluid overload',
      },
      {
        id: 9,
        name: 'Swelling of Stomach',
      },
      {
        id: 10,
        name: 'Swelled Lymph nodes',
      },
      {
        id: 11,
        name: 'Malaise',
      },
      {
        id: 12,
        name: 'Blurred and distorted vision',
      },
      {
        id: 13,
        name: 'Phlegm',
      },
      {
        id: 14,
        name: 'Throat irritation',
      },
      {
        id: 15,
        name: 'Redness of eyes',
      },
      {
        id: 16,
        name: 'Sinus Pressure',
      },
      {
        id: 17,
        name: 'Runny nose',
      },
      {
        id: 18,
        name: 'Congestion',
      },
      {
        id: 19,
        name: 'Chest pain',
      },
      {
        id: 20,
        name: 'Weakness in limb',
      },
      {
        id: 21,
        name: 'Fast heart rate',
      },
      {
        id: 22,
        name: 'Pain during bowel movements',
      },
      {
        id: 23,
        name: 'Pain in anal region',
      },
    ];

    const datalist = {
        DataList: [
          {
            id: 1,
            name: "JavaScript"
          },
          {
            id: 2,
            name: "Java"
          },
          {
            id: 3,
            name: "Ruby"
          },
          {
            id: 4,
            name: "React Native"
          },
          {
            id: 5,
            name: "PHP"
          },
          {
            id: 6,
            name: "Python"
          },
          {
            id: 7,
            name: "Go"
          },
          {
            id: 8,
            name: "Swift"
          }
        ],
        query: ""
      };

    export {parameters, datalist, symtomps};


// body = {
// 	"sym1": 1,
// 	"sym2": 2,
//   	"sym3": 3,
//   	"sym4": 4,
//   	"sym5": 5

// }


// body = {
// 	"sym1": 1,
// 	"sym2": 5,
//   	"sym3": 19,
//   	"sym4": 0,
//   	"sym5": 0
// }

// > 0 "'back_pain'"
// > 1 "'constipation'"
// > 2 "'abdominal_pain'"
// > 3 "'diarrhoea'"
// > 4 "'mild_fever'"
// > 5 "'yellow_urine'"
// > 6 "
//     'yellowing_of_eyes'"
// > 7 "'acute_liver_failure'"
// > 8 "'fluid_overload'"
// > 9 "'swelling_of_stomach'"
// > 10 "
//     'swelled_lymph_nodes'"
// > 11 "'malaise'"
// > 12 "'blurred_and_distorted_vision'"
// > 13 "'phlegm'"
// > 14 "'throat_irritation'"
// > 15 "
//     'redness_of_eyes'"
// > 16 "'sinus_pressure'"
// > 17 "'runny_nose'"
// > 18 "'congestion'"
// > 19 "'chest_pain'"
// > 20 "'weakness_in_limbs'"
// > 21 "
//     'fast_heart_rate'"
// > 22 "'pain_during_bowel_movements'"
// > 23 "'pain_in_anal_region'"
// > 24 "'bloody_stool'"
// > 25 "
//     'irritation_in_anus'"
// > 26 "'neck_pain'"
// > 27 "'dizziness'"
// > 28 "'cramps'"
// > 29 "'bruising'"
// > 30 "'obesity'"
// > 31 "'swollen_legs'"
// > 32 "
//     'swollen_blood_vessels'"
// > 33 "'puffy_face_and_eyes'"
// > 34 "'enlarged_thyroid'"
// > 35 "'brittle_nails'"
// > 36 "
//     'swollen_extremeties'"
// > 37 "'excessive_hunger'"
// > 38 "'extra_marital_contacts'"
// > 39 "'drying_and_tingling_lips'"
// > 40 "
//     'slurred_speech'"
// > 41 "'knee_pain'"
// > 42 "'hip_joint_pain'"
// > 43 "'muscle_weakness'"
// > 44 "'stiff_neck'"
// > 45 "'swelling_joints'"
// > 46 "
//     'movement_stiffness'"
// > 47 "'spinning_movements'"
// > 48 "'loss_of_balance'"
// > 49 "'unsteadiness'"
// > 50 "
//     'weakness_of_one_body_side'"
// > 51 "'loss_of_smell'"
// > 52 "'bladder_discomfort'"
// > 53 "'foul_smell_of urine'"
// > 54 "
//     'continuous_feel_of_urine'"
// > 55 "'passage_of_gases'"
// > 56 "'internal_itching'"
// > 57 "'toxic_look_(typhos)'"
// > 58 "
//     'depression'"
// > 59 "'irritability'"
// > 60 "'muscle_pain'"
// > 61 "'altered_sensorium'"
// > 62 "'red_spots_over_body'"
// > 63 "'belly_pain'"
// > 64 "
//     'abnormal_menstruation'"
// > 65 "'dischromic _patches'"
// > 66 "'watering_from_eyes'"
// > 67 "'increased_appetite'"
// > 68 "'polyuria'"
// > 69 "'family_history'"
// > 70 "'mucoid_sputum'"
// > 71 "
//     'rusty_sputum'"
// > 72 "'lack_of_concentration'"
// > 73 "'visual_disturbances'"
// > 74 "'receiving_blood_transfusion'"
// > 75 "
//     'receiving_unsterile_injections'"
// > 76 "'coma'"
// > 77 "'stomach_bleeding'"
// > 78 "'distention_of_abdomen'"
// > 79 "
//     'history_of_alcohol_consumption'"
// > 80 "'fluid_overload'"
// > 81 "'blood_in_sputum'"
// > 82 "'prominent_veins_on_calf'"
// > 83 "
//     'palpitations'"
// > 84 "'painful_walking'"
// > 85 "'pus_filled_pimples'"
// > 86 "'blackheads'"
// > 87 "'scurring'"
// > 88 "'skin_peeling'"
// > 89 "
//     'silver_like_dusting'"
// > 90 "'small_dents_in_nails'"
// > 91 "'inflammatory_nails'"
// > 92 "'blister'"
// > 93 "'red_sore_around_nose'"
// > 94 "
//     'yellow_crust_ooze'"