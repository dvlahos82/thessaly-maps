var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Relief_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Relief<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Relief_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2347188.228804, 4709179.363611, 2714124.113295, 4898502.293546]
        })
    });
var lyr_Altitudezones_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Altitude zones<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Altitudezones_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2348815.196623, 4713091.386859, 2709145.409324, 4896664.403010]
        })
    });
var lyr_Landuse_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Land use<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landuse_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2345485.512538, 4712330.244863, 2709453.640423, 4899748.597167]
        })
    });
var format_Communitysizebyaltitude_4 = new ol.format.GeoJSON();
var features_Communitysizebyaltitude_4 = format_Communitysizebyaltitude_4.readFeatures(json_Communitysizebyaltitude_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communitysizebyaltitude_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communitysizebyaltitude_4.addFeatures(features_Communitysizebyaltitude_4);
var lyr_Communitysizebyaltitude_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communitysizebyaltitude_4, 
                style: style_Communitysizebyaltitude_4,
                popuplayertitle: 'Community size by altitude',
                interactive: false,
    title: 'Community size by altitude<br />\
    <img src="styles/legend/Communitysizebyaltitude_4_0.png" /> >1000m<br />\
    <img src="styles/legend/Communitysizebyaltitude_4_1.png" /> 200-1000m<br />\
    <img src="styles/legend/Communitysizebyaltitude_4_2.png" /> <200m<br />' });
var format_density_5 = new ol.format.GeoJSON();
var features_density_5 = format_density_5.readFeatures(json_density_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_density_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_density_5.addFeatures(features_density_5);
var lyr_density_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_density_5, 
                style: style_density_5,
                popuplayertitle: 'density',
                interactive: false,
    title: 'density<br />\
    <img src="styles/legend/density_5_0.png" /> <5<br />\
    <img src="styles/legend/density_5_1.png" /> 5 - 10<br />\
    <img src="styles/legend/density_5_2.png" /> 10 - 20<br />\
    <img src="styles/legend/density_5_3.png" /> 20 - 50<br />\
    <img src="styles/legend/density_5_4.png" /> >50<br />' });
var format_Municipalpopulationurbanvsrural_6 = new ol.format.GeoJSON();
var features_Municipalpopulationurbanvsrural_6 = format_Municipalpopulationurbanvsrural_6.readFeatures(json_Municipalpopulationurbanvsrural_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalpopulationurbanvsrural_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalpopulationurbanvsrural_6.addFeatures(features_Municipalpopulationurbanvsrural_6);
var lyr_Municipalpopulationurbanvsrural_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipalpopulationurbanvsrural_6, 
                style: style_Municipalpopulationurbanvsrural_6,
                popuplayertitle: 'Municipal population - urban vs rural',
                interactive: false,
    title: 'Municipal population - urban vs rural<br />\
    <img src="styles/legend/Municipalpopulationurbanvsrural_6_0.png" /> Αστικός<br />\
    <img src="styles/legend/Municipalpopulationurbanvsrural_6_1.png" /> Μη αστικός<br />' });
var format_Municipalpopulationdistortedaltitude_7 = new ol.format.GeoJSON();
var features_Municipalpopulationdistortedaltitude_7 = format_Municipalpopulationdistortedaltitude_7.readFeatures(json_Municipalpopulationdistortedaltitude_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalpopulationdistortedaltitude_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalpopulationdistortedaltitude_7.addFeatures(features_Municipalpopulationdistortedaltitude_7);
var lyr_Municipalpopulationdistortedaltitude_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipalpopulationdistortedaltitude_7, 
                style: style_Municipalpopulationdistortedaltitude_7,
                popuplayertitle: 'Municipal population distorted- altitude',
                interactive: false,
    title: 'Municipal population distorted- altitude<br />\
    <img src="styles/legend/Municipalpopulationdistortedaltitude_7_0.png" /> Ημιορεινά<br />\
    <img src="styles/legend/Municipalpopulationdistortedaltitude_7_1.png" /> Ορεινά<br />\
    <img src="styles/legend/Municipalpopulationdistortedaltitude_7_2.png" /> Πεδινά<br />\
    <img src="styles/legend/Municipalpopulationdistortedaltitude_7_3.png" /> Αστικά<br />' });
var format_GDPagriculture_8 = new ol.format.GeoJSON();
var features_GDPagriculture_8 = format_GDPagriculture_8.readFeatures(json_GDPagriculture_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GDPagriculture_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GDPagriculture_8.addFeatures(features_GDPagriculture_8);
var lyr_GDPagriculture_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GDPagriculture_8, 
                style: style_GDPagriculture_8,
                popuplayertitle: 'GDP agriculture',
                interactive: false,
    title: 'GDP agriculture<br />\
    <img src="styles/legend/GDPagriculture_8_0.png" /> Καρδίτσας<br />\
    <img src="styles/legend/GDPagriculture_8_1.png" /> Λάρισας<br />\
    <img src="styles/legend/GDPagriculture_8_2.png" /> Μαγνησίας<br />\
    <img src="styles/legend/GDPagriculture_8_3.png" /> Τρικάλων<br />' });
var format_GDPIndustry_9 = new ol.format.GeoJSON();
var features_GDPIndustry_9 = format_GDPIndustry_9.readFeatures(json_GDPIndustry_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GDPIndustry_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GDPIndustry_9.addFeatures(features_GDPIndustry_9);
var lyr_GDPIndustry_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GDPIndustry_9, 
                style: style_GDPIndustry_9,
                popuplayertitle: 'GDP Industry',
                interactive: false,
    title: 'GDP Industry<br />\
    <img src="styles/legend/GDPIndustry_9_0.png" /> Καρδίτσας<br />\
    <img src="styles/legend/GDPIndustry_9_1.png" /> Λάρισας<br />\
    <img src="styles/legend/GDPIndustry_9_2.png" /> Μαγνησίας<br />\
    <img src="styles/legend/GDPIndustry_9_3.png" /> Τρικάλων<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Relief_1.setVisible(false);lyr_Altitudezones_2.setVisible(false);lyr_Landuse_3.setVisible(false);lyr_Communitysizebyaltitude_4.setVisible(false);lyr_density_5.setVisible(false);lyr_Municipalpopulationurbanvsrural_6.setVisible(false);lyr_Municipalpopulationdistortedaltitude_7.setVisible(false);lyr_GDPagriculture_8.setVisible(false);lyr_GDPIndustry_9.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Relief_1,lyr_Altitudezones_2,lyr_Landuse_3,lyr_Communitysizebyaltitude_4,lyr_density_5,lyr_Municipalpopulationurbanvsrural_6,lyr_Municipalpopulationdistortedaltitude_7,lyr_GDPagriculture_8,lyr_GDPIndustry_9];
lyr_Communitysizebyaltitude_4.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_keim': 'kodikos_keim', 'piknotita': 'piknotita', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_density_5.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_keim': 'kodikos_keim', 'piknotita': 'piknotita', 'area': 'area', });
lyr_Municipalpopulationurbanvsrural_6.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_ke': 'kodikos_ke', 'piknotita': 'piknotita', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_Municipalpopulationdistortedaltitude_7.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_ke': 'kodikos_ke', 'piknotita': 'piknotita', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_GDPagriculture_8.set('fieldAliases', {'fid': 'fid', 'Nomos': 'Nomos', 'Ανθρωπογενές': 'Ανθρωπογενές', 'Δασικές': 'Δασικές', 'Γεωργικές': 'Γεωργικές', 'Υγρότοποι': 'Υγρότοποι', 'Αστικοί': 'Αστικοί', 'Αγροτικοί': 'Αγροτικοί', 'ορεινοί': 'ορεινοί', 'ημιορεινοί': 'ημιορεινοί', 'πεδινοί': 'πεδινοί', 'ΑΕΠ κκ': 'ΑΕΠ κκ', 'Πληθυσμός': 'Πληθυσμός', 'ΑΕΠ': 'ΑΕΠ', 'test': 'test', 'ΑΕΠ γεωργία': 'ΑΕΠ γεωργία', 'ΑΕΠ μεταποίηση': 'ΑΕΠ μεταποίηση', 'ΑΕΠ ανά στρέμμα': 'ΑΕΠ ανά στρέμμα', });
lyr_GDPIndustry_9.set('fieldAliases', {'fid': 'fid', 'Nomos': 'Nomos', 'Ανθρωπογενές': 'Ανθρωπογενές', 'Δασικές': 'Δασικές', 'Γεωργικές': 'Γεωργικές', 'Υγρότοποι': 'Υγρότοποι', 'Αστικοί': 'Αστικοί', 'Αγροτικοί': 'Αγροτικοί', 'ορεινοί': 'ορεινοί', 'ημιορεινοί': 'ημιορεινοί', 'πεδινοί': 'πεδινοί', 'ΑΕΠ κκ': 'ΑΕΠ κκ', 'Πληθυσμός': 'Πληθυσμός', 'ΑΕΠ': 'ΑΕΠ', 'test': 'test', 'Γεωργία': 'Γεωργία', 'Βιομηχανία': 'Βιομηχανία', 'Υπηρεσίες': 'Υπηρεσίες', 'Δημόσιο': 'Δημόσιο', 'Ακίνητα': 'Ακίνητα', 'Σύνολο': 'Σύνολο', });
lyr_Communitysizebyaltitude_4.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'Range', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'Range', 'Astikotita': 'Range', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'Range', 'kodikos_keim': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_density_5.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'Range', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'Range', 'Astikotita': 'Range', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'Range', 'kodikos_keim': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'Range', });
lyr_Municipalpopulationurbanvsrural_6.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'TextEdit', 'Astikotita': 'Range', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'TextEdit', 'kodikos_ke': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Municipalpopulationdistortedaltitude_7.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'TextEdit', 'Astikotita': 'TextEdit', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'TextEdit', 'kodikos_ke': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_GDPagriculture_8.set('fieldImages', {'fid': 'TextEdit', 'Nomos': 'TextEdit', 'Ανθρωπογενές': 'TextEdit', 'Δασικές': 'TextEdit', 'Γεωργικές': 'TextEdit', 'Υγρότοποι': 'TextEdit', 'Αστικοί': 'TextEdit', 'Αγροτικοί': 'TextEdit', 'ορεινοί': 'Range', 'ημιορεινοί': 'Range', 'πεδινοί': 'Range', 'ΑΕΠ κκ': 'Range', 'Πληθυσμός': 'Range', 'ΑΕΠ': 'TextEdit', 'test': 'Range', 'ΑΕΠ γεωργία': 'Range', 'ΑΕΠ μεταποίηση': 'Range', 'ΑΕΠ ανά στρέμμα': 'Range', });
lyr_GDPIndustry_9.set('fieldImages', {'fid': 'TextEdit', 'Nomos': 'TextEdit', 'Ανθρωπογενές': 'TextEdit', 'Δασικές': 'TextEdit', 'Γεωργικές': 'TextEdit', 'Υγρότοποι': 'TextEdit', 'Αστικοί': 'TextEdit', 'Αγροτικοί': 'TextEdit', 'ορεινοί': 'Range', 'ημιορεινοί': 'Range', 'πεδινοί': 'Range', 'ΑΕΠ κκ': 'Range', 'Πληθυσμός': 'Range', 'ΑΕΠ': 'TextEdit', 'test': 'Range', 'Γεωργία': 'Range', 'Βιομηχανία': 'Range', 'Υπηρεσίες': 'Range', 'Δημόσιο': 'Range', 'Ακίνητα': 'Range', 'Σύνολο': 'Range', });
lyr_Communitysizebyaltitude_4.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_keim': 'no label', 'piknotita': 'no label', 'area': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_density_5.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_keim': 'no label', 'piknotita': 'no label', 'area': 'no label', });
lyr_Municipalpopulationurbanvsrural_6.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_ke': 'no label', 'piknotita': 'no label', 'area': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Municipalpopulationdistortedaltitude_7.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_ke': 'no label', 'piknotita': 'no label', 'area': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GDPagriculture_8.set('fieldLabels', {'fid': 'no label', 'Nomos': 'no label', 'Ανθρωπογενές': 'no label', 'Δασικές': 'no label', 'Γεωργικές': 'no label', 'Υγρότοποι': 'no label', 'Αστικοί': 'no label', 'Αγροτικοί': 'no label', 'ορεινοί': 'no label', 'ημιορεινοί': 'no label', 'πεδινοί': 'no label', 'ΑΕΠ κκ': 'no label', 'Πληθυσμός': 'no label', 'ΑΕΠ': 'no label', 'test': 'no label', 'ΑΕΠ γεωργία': 'no label', 'ΑΕΠ μεταποίηση': 'no label', 'ΑΕΠ ανά στρέμμα': 'no label', });
lyr_GDPIndustry_9.set('fieldLabels', {'fid': 'no label', 'Nomos': 'no label', 'Ανθρωπογενές': 'no label', 'Δασικές': 'no label', 'Γεωργικές': 'no label', 'Υγρότοποι': 'no label', 'Αστικοί': 'no label', 'Αγροτικοί': 'no label', 'ορεινοί': 'no label', 'ημιορεινοί': 'no label', 'πεδινοί': 'no label', 'ΑΕΠ κκ': 'no label', 'Πληθυσμός': 'no label', 'ΑΕΠ': 'no label', 'test': 'no label', 'Γεωργία': 'no label', 'Βιομηχανία': 'no label', 'Υπηρεσίες': 'no label', 'Δημόσιο': 'no label', 'Ακίνητα': 'no label', 'Σύνολο': 'no label', });
lyr_GDPIndustry_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});