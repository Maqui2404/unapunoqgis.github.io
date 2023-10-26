var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Finesi_1 = new ol.format.GeoJSON();
var features_Finesi_1 = format_Finesi_1.readFeatures(json_Finesi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Finesi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finesi_1.addFeatures(features_Finesi_1);
var lyr_Finesi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Finesi_1, 
                style: style_Finesi_1,
                interactive: true,
                title: '<img src="styles/legend/Finesi_1.png" /> Finesi'
            });
var format_Administracin_2 = new ol.format.GeoJSON();
var features_Administracin_2 = format_Administracin_2.readFeatures(json_Administracin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administracin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administracin_2.addFeatures(features_Administracin_2);
var lyr_Administracin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administracin_2, 
                style: style_Administracin_2,
                interactive: true,
                title: '<img src="styles/legend/Administracin_2.png" /> Administración'
            });
var format_Sistemas_3 = new ol.format.GeoJSON();
var features_Sistemas_3 = format_Sistemas_3.readFeatures(json_Sistemas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistemas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemas_3.addFeatures(features_Sistemas_3);
var lyr_Sistemas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sistemas_3, 
                style: style_Sistemas_3,
                interactive: true,
                title: '<img src="styles/legend/Sistemas_3.png" /> Sistemas'
            });
var format_Polgonos_Sistemas_4 = new ol.format.GeoJSON();
var features_Polgonos_Sistemas_4 = format_Polgonos_Sistemas_4.readFeatures(json_Polgonos_Sistemas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polgonos_Sistemas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polgonos_Sistemas_4.addFeatures(features_Polgonos_Sistemas_4);
var lyr_Polgonos_Sistemas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polgonos_Sistemas_4, 
                style: style_Polgonos_Sistemas_4,
                interactive: true,
                title: '<img src="styles/legend/Polgonos_Sistemas_4.png" /> Polígonos_Sistemas'
            });
var format_fines1_g1_5 = new ol.format.GeoJSON();
var features_fines1_g1_5 = format_fines1_g1_5.readFeatures(json_fines1_g1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fines1_g1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fines1_g1_5.addFeatures(features_fines1_g1_5);
var lyr_fines1_g1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fines1_g1_5, 
                style: style_fines1_g1_5,
                interactive: true,
                title: '<img src="styles/legend/fines1_g1_5.png" /> fines1_g1'
            });
var format_FINES_1_G_6 = new ol.format.GeoJSON();
var features_FINES_1_G_6 = format_FINES_1_G_6.readFeatures(json_FINES_1_G_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FINES_1_G_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FINES_1_G_6.addFeatures(features_FINES_1_G_6);
var lyr_FINES_1_G_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FINES_1_G_6, 
                style: style_FINES_1_G_6,
                interactive: true,
                title: '<img src="styles/legend/FINES_1_G_6.png" /> FINES_1_G'
            });
var format_Convenciones_7 = new ol.format.GeoJSON();
var features_Convenciones_7 = format_Convenciones_7.readFeatures(json_Convenciones_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Convenciones_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Convenciones_7.addFeatures(features_Convenciones_7);
var lyr_Convenciones_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Convenciones_7, 
                style: style_Convenciones_7,
                interactive: true,
                title: '<img src="styles/legend/Convenciones_7.png" /> Convenciones'
            });
var format_EduPrimaria_8 = new ol.format.GeoJSON();
var features_EduPrimaria_8 = format_EduPrimaria_8.readFeatures(json_EduPrimaria_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduPrimaria_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduPrimaria_8.addFeatures(features_EduPrimaria_8);
var lyr_EduPrimaria_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduPrimaria_8, 
                style: style_EduPrimaria_8,
                interactive: true,
                title: '<img src="styles/legend/EduPrimaria_8.png" /> Edu Primaria'
            });
var format_EdificioUnivers_9 = new ol.format.GeoJSON();
var features_EdificioUnivers_9 = format_EdificioUnivers_9.readFeatures(json_EdificioUnivers_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdificioUnivers_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioUnivers_9.addFeatures(features_EdificioUnivers_9);
var lyr_EdificioUnivers_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EdificioUnivers_9, 
                style: style_EdificioUnivers_9,
                interactive: true,
                title: '<img src="styles/legend/EdificioUnivers_9.png" /> Edificio Univers'
            });
var format_Agronmica_10 = new ol.format.GeoJSON();
var features_Agronmica_10 = format_Agronmica_10.readFeatures(json_Agronmica_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agronmica_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agronmica_10.addFeatures(features_Agronmica_10);
var lyr_Agronmica_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agronmica_10, 
                style: style_Agronmica_10,
                interactive: true,
                title: '<img src="styles/legend/Agronmica_10.png" /> Agronómica'
            });
var format_BienEstar_11 = new ol.format.GeoJSON();
var features_BienEstar_11 = format_BienEstar_11.readFeatures(json_BienEstar_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BienEstar_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BienEstar_11.addFeatures(features_BienEstar_11);
var lyr_BienEstar_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BienEstar_11, 
                style: style_BienEstar_11,
                interactive: true,
                title: '<img src="styles/legend/BienEstar_11.png" /> Bien Estar'
            });
var format_Enfermera_12 = new ol.format.GeoJSON();
var features_Enfermera_12 = format_Enfermera_12.readFeatures(json_Enfermera_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enfermera_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enfermera_12.addFeatures(features_Enfermera_12);
var lyr_Enfermera_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Enfermera_12, 
                style: style_Enfermera_12,
                interactive: true,
                title: '<img src="styles/legend/Enfermera_12.png" /> Enfermería'
            });
var format_OTIANTIGUA_13 = new ol.format.GeoJSON();
var features_OTIANTIGUA_13 = format_OTIANTIGUA_13.readFeatures(json_OTIANTIGUA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTIANTIGUA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTIANTIGUA_13.addFeatures(features_OTIANTIGUA_13);
var lyr_OTIANTIGUA_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTIANTIGUA_13, 
                style: style_OTIANTIGUA_13,
                interactive: true,
                title: '<img src="styles/legend/OTIANTIGUA_13.png" /> OTI ANTIGUA'
            });
var format_Administracion_14 = new ol.format.GeoJSON();
var features_Administracion_14 = format_Administracion_14.readFeatures(json_Administracion_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administracion_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administracion_14.addFeatures(features_Administracion_14);
var lyr_Administracion_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administracion_14, 
                style: style_Administracion_14,
                interactive: true,
                title: '<img src="styles/legend/Administracion_14.png" /> Administracion'
            });
var format_IngAgroindustrial_15 = new ol.format.GeoJSON();
var features_IngAgroindustrial_15 = format_IngAgroindustrial_15.readFeatures(json_IngAgroindustrial_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IngAgroindustrial_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IngAgroindustrial_15.addFeatures(features_IngAgroindustrial_15);
var lyr_IngAgroindustrial_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IngAgroindustrial_15, 
                style: style_IngAgroindustrial_15,
                interactive: true,
                title: '<img src="styles/legend/IngAgroindustrial_15.png" /> Ing Agroindustrial'
            });
var format_Fisica_16 = new ol.format.GeoJSON();
var features_Fisica_16 = format_Fisica_16.readFeatures(json_Fisica_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fisica_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fisica_16.addFeatures(features_Fisica_16);
var lyr_Fisica_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fisica_16, 
                style: style_Fisica_16,
                interactive: true,
                title: '<img src="styles/legend/Fisica_16.png" /> Fisica'
            });
var format_AuditorioMagno_17 = new ol.format.GeoJSON();
var features_AuditorioMagno_17 = format_AuditorioMagno_17.readFeatures(json_AuditorioMagno_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuditorioMagno_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuditorioMagno_17.addFeatures(features_AuditorioMagno_17);
var lyr_AuditorioMagno_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AuditorioMagno_17, 
                style: style_AuditorioMagno_17,
                interactive: true,
                title: '<img src="styles/legend/AuditorioMagno_17.png" /> Auditorio Magno'
            });
var format_Cafetin_18 = new ol.format.GeoJSON();
var features_Cafetin_18 = format_Cafetin_18.readFeatures(json_Cafetin_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafetin_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafetin_18.addFeatures(features_Cafetin_18);
var lyr_Cafetin_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafetin_18, 
                style: style_Cafetin_18,
                interactive: true,
                title: '<img src="styles/legend/Cafetin_18.png" /> Cafetin'
            });
var format_IngAgricola_19 = new ol.format.GeoJSON();
var features_IngAgricola_19 = format_IngAgricola_19.readFeatures(json_IngAgricola_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IngAgricola_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IngAgricola_19.addFeatures(features_IngAgricola_19);
var lyr_IngAgricola_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IngAgricola_19, 
                style: style_IngAgricola_19,
                interactive: true,
                title: '<img src="styles/legend/IngAgricola_19.png" /> Ing Agricola'
            });
var format_CCABN_20 = new ol.format.GeoJSON();
var features_CCABN_20 = format_CCABN_20.readFeatures(json_CCABN_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCABN_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCABN_20.addFeatures(features_CCABN_20);
var lyr_CCABN_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCABN_20, 
                style: style_CCABN_20,
                interactive: true,
                title: '<img src="styles/legend/CCABN_20.png" /> CCA BN'
            });
var format_AdministracionAntigua_21 = new ol.format.GeoJSON();
var features_AdministracionAntigua_21 = format_AdministracionAntigua_21.readFeatures(json_AdministracionAntigua_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministracionAntigua_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministracionAntigua_21.addFeatures(features_AdministracionAntigua_21);
var lyr_AdministracionAntigua_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdministracionAntigua_21, 
                style: style_AdministracionAntigua_21,
                interactive: true,
                title: '<img src="styles/legend/AdministracionAntigua_21.png" /> Administracion Antigua'
            });
var format_Finesinueva_22 = new ol.format.GeoJSON();
var features_Finesinueva_22 = format_Finesinueva_22.readFeatures(json_Finesinueva_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Finesinueva_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finesinueva_22.addFeatures(features_Finesinueva_22);
var lyr_Finesinueva_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Finesinueva_22, 
                style: style_Finesinueva_22,
                interactive: true,
                title: '<img src="styles/legend/Finesinueva_22.png" /> Finesi nueva'
            });
var format_FINESIANT_23 = new ol.format.GeoJSON();
var features_FINESIANT_23 = format_FINESIANT_23.readFeatures(json_FINESIANT_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FINESIANT_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FINESIANT_23.addFeatures(features_FINESIANT_23);
var lyr_FINESIANT_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FINESIANT_23, 
                style: style_FINESIANT_23,
                interactive: true,
                title: '<img src="styles/legend/FINESIANT_23.png" /> FINESI ANT'
            });
var format_NutricionHumana_24 = new ol.format.GeoJSON();
var features_NutricionHumana_24 = format_NutricionHumana_24.readFeatures(json_NutricionHumana_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NutricionHumana_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NutricionHumana_24.addFeatures(features_NutricionHumana_24);
var lyr_NutricionHumana_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NutricionHumana_24, 
                style: style_NutricionHumana_24,
                interactive: true,
                title: '<img src="styles/legend/NutricionHumana_24.png" /> Nutricion Humana'
            });
var format_Odontologia_25 = new ol.format.GeoJSON();
var features_Odontologia_25 = format_Odontologia_25.readFeatures(json_Odontologia_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Odontologia_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Odontologia_25.addFeatures(features_Odontologia_25);
var lyr_Odontologia_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Odontologia_25, 
                style: style_Odontologia_25,
                interactive: true,
                title: '<img src="styles/legend/Odontologia_25.png" /> Odontologia'
            });
var format_NutricionLaboratorio_26 = new ol.format.GeoJSON();
var features_NutricionLaboratorio_26 = format_NutricionLaboratorio_26.readFeatures(json_NutricionLaboratorio_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NutricionLaboratorio_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NutricionLaboratorio_26.addFeatures(features_NutricionLaboratorio_26);
var lyr_NutricionLaboratorio_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NutricionLaboratorio_26, 
                style: style_NutricionLaboratorio_26,
                interactive: true,
                title: '<img src="styles/legend/NutricionLaboratorio_26.png" /> Nutricion Laboratorio'
            });
var format_OtontologiaLaboratorio_27 = new ol.format.GeoJSON();
var features_OtontologiaLaboratorio_27 = format_OtontologiaLaboratorio_27.readFeatures(json_OtontologiaLaboratorio_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtontologiaLaboratorio_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtontologiaLaboratorio_27.addFeatures(features_OtontologiaLaboratorio_27);
var lyr_OtontologiaLaboratorio_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OtontologiaLaboratorio_27, 
                style: style_OtontologiaLaboratorio_27,
                interactive: true,
                title: '<img src="styles/legend/OtontologiaLaboratorio_27.png" /> Otontologia Laboratorio'
            });
var format_APII_28 = new ol.format.GeoJSON();
var features_APII_28 = format_APII_28.readFeatures(json_APII_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APII_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APII_28.addFeatures(features_APII_28);
var lyr_APII_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APII_28, 
                style: style_APII_28,
                interactive: true,
                title: '<img src="styles/legend/APII_28.png" /> APII'
            });
var format_CCN_29 = new ol.format.GeoJSON();
var features_CCN_29 = format_CCN_29.readFeatures(json_CCN_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCN_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCN_29.addFeatures(features_CCN_29);
var lyr_CCN_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCN_29, 
                style: style_CCN_29,
                interactive: true,
                title: '<img src="styles/legend/CCN_29.png" /> CCN'
            });
var format_TUR_30 = new ol.format.GeoJSON();
var features_TUR_30 = format_TUR_30.readFeatures(json_TUR_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUR_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUR_30.addFeatures(features_TUR_30);
var lyr_TUR_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TUR_30, 
                style: style_TUR_30,
                interactive: true,
                title: '<img src="styles/legend/TUR_30.png" /> TUR'
            });
var format_SSA_31 = new ol.format.GeoJSON();
var features_SSA_31 = format_SSA_31.readFeatures(json_SSA_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSA_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSA_31.addFeatures(features_SSA_31);
var lyr_SSA_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SSA_31, 
                style: style_SSA_31,
                interactive: true,
                title: '<img src="styles/legend/SSA_31.png" /> SSA'
            });
var format_LABMIN_32 = new ol.format.GeoJSON();
var features_LABMIN_32 = format_LABMIN_32.readFeatures(json_LABMIN_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LABMIN_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LABMIN_32.addFeatures(features_LABMIN_32);
var lyr_LABMIN_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LABMIN_32, 
                style: style_LABMIN_32,
                interactive: true,
                title: '<img src="styles/legend/LABMIN_32.png" /> LABMIN'
            });
var format_MINAI_33 = new ol.format.GeoJSON();
var features_MINAI_33 = format_MINAI_33.readFeatures(json_MINAI_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINAI_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINAI_33.addFeatures(features_MINAI_33);
var lyr_MINAI_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINAI_33, 
                style: style_MINAI_33,
                interactive: true,
                title: '<img src="styles/legend/MINAI_33.png" /> MINAI'
            });
var format_INGECONOMICA_34 = new ol.format.GeoJSON();
var features_INGECONOMICA_34 = format_INGECONOMICA_34.readFeatures(json_INGECONOMICA_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INGECONOMICA_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INGECONOMICA_34.addFeatures(features_INGECONOMICA_34);
var lyr_INGECONOMICA_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INGECONOMICA_34, 
                style: style_INGECONOMICA_34,
                interactive: true,
                title: '<img src="styles/legend/INGECONOMICA_34.png" /> ING ECONOMICA'
            });
var format_LABOAC_35 = new ol.format.GeoJSON();
var features_LABOAC_35 = format_LABOAC_35.readFeatures(json_LABOAC_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LABOAC_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LABOAC_35.addFeatures(features_LABOAC_35);
var lyr_LABOAC_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LABOAC_35, 
                style: style_LABOAC_35,
                interactive: true,
                title: '<img src="styles/legend/LABOAC_35.png" /> LABOAC'
            });
var format_SINNOM_36 = new ol.format.GeoJSON();
var features_SINNOM_36 = format_SINNOM_36.readFeatures(json_SINNOM_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SINNOM_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SINNOM_36.addFeatures(features_SINNOM_36);
var lyr_SINNOM_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SINNOM_36, 
                style: style_SINNOM_36,
                interactive: true,
                title: '<img src="styles/legend/SINNOM_36.png" /> SINNOM'
            });
var format_QUIM_37 = new ol.format.GeoJSON();
var features_QUIM_37 = format_QUIM_37.readFeatures(json_QUIM_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUIM_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUIM_37.addFeatures(features_QUIM_37);
var lyr_QUIM_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QUIM_37, 
                style: style_QUIM_37,
                interactive: true,
                title: '<img src="styles/legend/QUIM_37.png" /> QUIM'
            });
var format_VETZOC_38 = new ol.format.GeoJSON();
var features_VETZOC_38 = format_VETZOC_38.readFeatures(json_VETZOC_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VETZOC_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VETZOC_38.addFeatures(features_VETZOC_38);
var lyr_VETZOC_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VETZOC_38, 
                style: style_VETZOC_38,
                interactive: true,
                title: '<img src="styles/legend/VETZOC_38.png" /> VETZOC'
            });
var format_AGRO_39 = new ol.format.GeoJSON();
var features_AGRO_39 = format_AGRO_39.readFeatures(json_AGRO_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRO_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRO_39.addFeatures(features_AGRO_39);
var lyr_AGRO_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRO_39, 
                style: style_AGRO_39,
                interactive: true,
                title: '<img src="styles/legend/AGRO_39.png" /> AGRO'
            });
var format_SOCIO_40 = new ol.format.GeoJSON();
var features_SOCIO_40 = format_SOCIO_40.readFeatures(json_SOCIO_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOCIO_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOCIO_40.addFeatures(features_SOCIO_40);
var lyr_SOCIO_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOCIO_40, 
                style: style_SOCIO_40,
                interactive: true,
                title: '<img src="styles/legend/SOCIO_40.png" /> SOCIO'
            });
var format_SCSII_41 = new ol.format.GeoJSON();
var features_SCSII_41 = format_SCSII_41.readFeatures(json_SCSII_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCSII_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCSII_41.addFeatures(features_SCSII_41);
var lyr_SCSII_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCSII_41, 
                style: style_SCSII_41,
                interactive: true,
                title: '<img src="styles/legend/SCSII_41.png" /> SCSII'
            });
var format_SCSII_42 = new ol.format.GeoJSON();
var features_SCSII_42 = format_SCSII_42.readFeatures(json_SCSII_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCSII_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCSII_42.addFeatures(features_SCSII_42);
var lyr_SCSII_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCSII_42, 
                style: style_SCSII_42,
                interactive: true,
                title: '<img src="styles/legend/SCSII_42.png" /> SCSII'
            });
var format_COME_43 = new ol.format.GeoJSON();
var features_COME_43 = format_COME_43.readFeatures(json_COME_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COME_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COME_43.addFeatures(features_COME_43);
var lyr_COME_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COME_43, 
                style: style_COME_43,
                interactive: true,
                title: '<img src="styles/legend/COME_43.png" /> COME'
            });
var format_ANTROPOLOGIA_44 = new ol.format.GeoJSON();
var features_ANTROPOLOGIA_44 = format_ANTROPOLOGIA_44.readFeatures(json_ANTROPOLOGIA_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANTROPOLOGIA_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANTROPOLOGIA_44.addFeatures(features_ANTROPOLOGIA_44);
var lyr_ANTROPOLOGIA_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANTROPOLOGIA_44, 
                style: style_ANTROPOLOGIA_44,
                interactive: true,
                title: '<img src="styles/legend/ANTROPOLOGIA_44.png" /> ANTROPOLOGIA'
            });
var format_ZOOL_45 = new ol.format.GeoJSON();
var features_ZOOL_45 = format_ZOOL_45.readFeatures(json_ZOOL_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZOOL_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZOOL_45.addFeatures(features_ZOOL_45);
var lyr_ZOOL_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZOOL_45, 
                style: style_ZOOL_45,
                interactive: true,
                title: '<img src="styles/legend/ZOOL_45.png" /> ZOOL'
            });
var format_VET_46 = new ol.format.GeoJSON();
var features_VET_46 = format_VET_46.readFeatures(json_VET_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VET_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VET_46.addFeatures(features_VET_46);
var lyr_VET_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VET_46, 
                style: style_VET_46,
                interactive: true,
                title: '<img src="styles/legend/VET_46.png" /> VET'
            });
var format_TRSO_47 = new ol.format.GeoJSON();
var features_TRSO_47 = format_TRSO_47.readFeatures(json_TRSO_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRSO_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRSO_47.addFeatures(features_TRSO_47);
var lyr_TRSO_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRSO_47, 
                style: style_TRSO_47,
                interactive: true,
                title: '<img src="styles/legend/TRSO_47.png" /> TRSO'
            });
var format_ELEC_48 = new ol.format.GeoJSON();
var features_ELEC_48 = format_ELEC_48.readFeatures(json_ELEC_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEC_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEC_48.addFeatures(features_ELEC_48);
var lyr_ELEC_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEC_48, 
                style: style_ELEC_48,
                interactive: true,
                title: '<img src="styles/legend/ELEC_48.png" /> ELEC'
            });
var format_CONTA_49 = new ol.format.GeoJSON();
var features_CONTA_49 = format_CONTA_49.readFeatures(json_CONTA_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTA_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTA_49.addFeatures(features_CONTA_49);
var lyr_CONTA_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONTA_49, 
                style: style_CONTA_49,
                interactive: true,
                title: '<img src="styles/legend/CONTA_49.png" /> CONTA'
            });
var format_ELECN_50 = new ol.format.GeoJSON();
var features_ELECN_50 = format_ELECN_50.readFeatures(json_ELECN_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELECN_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELECN_50.addFeatures(features_ELECN_50);
var lyr_ELECN_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELECN_50, 
                style: style_ELECN_50,
                interactive: true,
                title: '<img src="styles/legend/ELECN_50.png" /> ELECN'
            });
var format_CICS_51 = new ol.format.GeoJSON();
var features_CICS_51 = format_CICS_51.readFeatures(json_CICS_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CICS_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CICS_51.addFeatures(features_CICS_51);
var lyr_CICS_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CICS_51, 
                style: style_CICS_51,
                interactive: true,
                title: '<img src="styles/legend/CICS_51.png" /> CICS'
            });
var format_ARQUITECTURA_52 = new ol.format.GeoJSON();
var features_ARQUITECTURA_52 = format_ARQUITECTURA_52.readFeatures(json_ARQUITECTURA_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARQUITECTURA_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARQUITECTURA_52.addFeatures(features_ARQUITECTURA_52);
var lyr_ARQUITECTURA_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARQUITECTURA_52, 
                style: style_ARQUITECTURA_52,
                interactive: true,
                title: '<img src="styles/legend/ARQUITECTURA_52.png" /> ARQUITECTURA'
            });
var format_SOANT_53 = new ol.format.GeoJSON();
var features_SOANT_53 = format_SOANT_53.readFeatures(json_SOANT_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOANT_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOANT_53.addFeatures(features_SOANT_53);
var lyr_SOANT_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOANT_53, 
                style: style_SOANT_53,
                interactive: true,
                title: '<img src="styles/legend/SOANT_53.png" /> SOANT'
            });
var format_EDIFIS_54 = new ol.format.GeoJSON();
var features_EDIFIS_54 = format_EDIFIS_54.readFeatures(json_EDIFIS_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDIFIS_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFIS_54.addFeatures(features_EDIFIS_54);
var lyr_EDIFIS_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EDIFIS_54, 
                style: style_EDIFIS_54,
                interactive: true,
                title: '<img src="styles/legend/EDIFIS_54.png" /> EDIFIS'
            });
var format_PISC_55 = new ol.format.GeoJSON();
var features_PISC_55 = format_PISC_55.readFeatures(json_PISC_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PISC_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISC_55.addFeatures(features_PISC_55);
var lyr_PISC_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PISC_55, 
                style: style_PISC_55,
                interactive: true,
                title: '<img src="styles/legend/PISC_55.png" /> PISC'
            });
var format_TOPOGRAFIA_56 = new ol.format.GeoJSON();
var features_TOPOGRAFIA_56 = format_TOPOGRAFIA_56.readFeatures(json_TOPOGRAFIA_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPOGRAFIA_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPOGRAFIA_56.addFeatures(features_TOPOGRAFIA_56);
var lyr_TOPOGRAFIA_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOPOGRAFIA_56, 
                style: style_TOPOGRAFIA_56,
                interactive: true,
                title: '<img src="styles/legend/TOPOGRAFIA_56.png" /> TOPOGRAFIA'
            });
var format_TOPOANT_57 = new ol.format.GeoJSON();
var features_TOPOANT_57 = format_TOPOANT_57.readFeatures(json_TOPOANT_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPOANT_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPOANT_57.addFeatures(features_TOPOANT_57);
var lyr_TOPOANT_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOPOANT_57, 
                style: style_TOPOANT_57,
                interactive: true,
                title: '<img src="styles/legend/TOPOANT_57.png" /> TOPOANT'
            });
var format_GEOLO_58 = new ol.format.GeoJSON();
var features_GEOLO_58 = format_GEOLO_58.readFeatures(json_GEOLO_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLO_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLO_58.addFeatures(features_GEOLO_58);
var lyr_GEOLO_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLO_58, 
                style: style_GEOLO_58,
                interactive: true,
                title: '<img src="styles/legend/GEOLO_58.png" /> GEOLO'
            });
var format_SISTE_59 = new ol.format.GeoJSON();
var features_SISTE_59 = format_SISTE_59.readFeatures(json_SISTE_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SISTE_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SISTE_59.addFeatures(features_SISTE_59);
var lyr_SISTE_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SISTE_59, 
                style: style_SISTE_59,
                interactive: true,
                title: '<img src="styles/legend/SISTE_59.png" /> SISTE'
            });
var format_POST_60 = new ol.format.GeoJSON();
var features_POST_60 = format_POST_60.readFeatures(json_POST_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POST_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POST_60.addFeatures(features_POST_60);
var lyr_POST_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POST_60, 
                style: style_POST_60,
                interactive: true,
                title: '<img src="styles/legend/POST_60.png" /> POST'
            });
var format_ECON_61 = new ol.format.GeoJSON();
var features_ECON_61 = format_ECON_61.readFeatures(json_ECON_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECON_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECON_61.addFeatures(features_ECON_61);
var lyr_ECON_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ECON_61, 
                style: style_ECON_61,
                interactive: true,
                title: '<img src="styles/legend/ECON_61.png" /> ECON'
            });
var format_AUDICC_62 = new ol.format.GeoJSON();
var features_AUDICC_62 = format_AUDICC_62.readFeatures(json_AUDICC_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDICC_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDICC_62.addFeatures(features_AUDICC_62);
var lyr_AUDICC_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDICC_62, 
                style: style_AUDICC_62,
                interactive: true,
                title: '<img src="styles/legend/AUDICC_62.png" /> AUDICC'
            });
var format_EducacionPrimaria_63 = new ol.format.GeoJSON();
var features_EducacionPrimaria_63 = format_EducacionPrimaria_63.readFeatures(json_EducacionPrimaria_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducacionPrimaria_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducacionPrimaria_63.addFeatures(features_EducacionPrimaria_63);
var lyr_EducacionPrimaria_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EducacionPrimaria_63, 
                style: style_EducacionPrimaria_63,
                interactive: true,
                title: '<img src="styles/legend/EducacionPrimaria_63.png" /> Educacion Primaria'
            });
var format_FacultaddeEducacion_64 = new ol.format.GeoJSON();
var features_FacultaddeEducacion_64 = format_FacultaddeEducacion_64.readFeatures(json_FacultaddeEducacion_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacultaddeEducacion_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacultaddeEducacion_64.addFeatures(features_FacultaddeEducacion_64);
var lyr_FacultaddeEducacion_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FacultaddeEducacion_64, 
                style: style_FacultaddeEducacion_64,
                interactive: true,
                title: '<img src="styles/legend/FacultaddeEducacion_64.png" /> Facultad de Educacion'
            });
var format_BiologiaAntiguo_65 = new ol.format.GeoJSON();
var features_BiologiaAntiguo_65 = format_BiologiaAntiguo_65.readFeatures(json_BiologiaAntiguo_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiologiaAntiguo_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiologiaAntiguo_65.addFeatures(features_BiologiaAntiguo_65);
var lyr_BiologiaAntiguo_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiologiaAntiguo_65, 
                style: style_BiologiaAntiguo_65,
                interactive: true,
                title: '<img src="styles/legend/BiologiaAntiguo_65.png" /> Biologia Antiguo'
            });
var format_AlmacenCentral_66 = new ol.format.GeoJSON();
var features_AlmacenCentral_66 = format_AlmacenCentral_66.readFeatures(json_AlmacenCentral_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlmacenCentral_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlmacenCentral_66.addFeatures(features_AlmacenCentral_66);
var lyr_AlmacenCentral_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlmacenCentral_66, 
                style: style_AlmacenCentral_66,
                interactive: true,
                title: '<img src="styles/legend/AlmacenCentral_66.png" /> Almacen Central'
            });
var format_SistemasAntiguo_67 = new ol.format.GeoJSON();
var features_SistemasAntiguo_67 = format_SistemasAntiguo_67.readFeatures(json_SistemasAntiguo_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasAntiguo_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemasAntiguo_67.addFeatures(features_SistemasAntiguo_67);
var lyr_SistemasAntiguo_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SistemasAntiguo_67, 
                style: style_SistemasAntiguo_67,
                interactive: true,
                title: '<img src="styles/legend/SistemasAntiguo_67.png" /> Sistemas Antiguo'
            });
var format_Biblioteca_68 = new ol.format.GeoJSON();
var features_Biblioteca_68 = format_Biblioteca_68.readFeatures(json_Biblioteca_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteca_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteca_68.addFeatures(features_Biblioteca_68);
var lyr_Biblioteca_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biblioteca_68, 
                style: style_Biblioteca_68,
                interactive: true,
                title: '<img src="styles/legend/Biblioteca_68.png" /> Biblioteca'
            });
var format_Talleres_69 = new ol.format.GeoJSON();
var features_Talleres_69 = format_Talleres_69.readFeatures(json_Talleres_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Talleres_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Talleres_69.addFeatures(features_Talleres_69);
var lyr_Talleres_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Talleres_69, 
                style: style_Talleres_69,
                interactive: true,
                title: '<img src="styles/legend/Talleres_69.png" /> Talleres'
            });
var format_EdificioJuanMuozR_70 = new ol.format.GeoJSON();
var features_EdificioJuanMuozR_70 = format_EdificioJuanMuozR_70.readFeatures(json_EdificioJuanMuozR_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdificioJuanMuozR_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioJuanMuozR_70.addFeatures(features_EdificioJuanMuozR_70);
var lyr_EdificioJuanMuozR_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EdificioJuanMuozR_70, 
                style: style_EdificioJuanMuozR_70,
                interactive: true,
                title: '<img src="styles/legend/EdificioJuanMuozR_70.png" /> Edificio Juan Muñoz R'
            });
var format_Medicina_71 = new ol.format.GeoJSON();
var features_Medicina_71 = format_Medicina_71.readFeatures(json_Medicina_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medicina_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medicina_71.addFeatures(features_Medicina_71);
var lyr_Medicina_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medicina_71, 
                style: style_Medicina_71,
                interactive: true,
                title: '<img src="styles/legend/Medicina_71.png" /> Medicina'
            });
var format_Centrodediagporimg_72 = new ol.format.GeoJSON();
var features_Centrodediagporimg_72 = format_Centrodediagporimg_72.readFeatures(json_Centrodediagporimg_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrodediagporimg_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrodediagporimg_72.addFeatures(features_Centrodediagporimg_72);
var lyr_Centrodediagporimg_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrodediagporimg_72, 
                style: style_Centrodediagporimg_72,
                interactive: true,
                title: '<img src="styles/legend/Centrodediagporimg_72.png" /> Centro de diag por img'
            });
var format_FacultadCienciasBiologicas_73 = new ol.format.GeoJSON();
var features_FacultadCienciasBiologicas_73 = format_FacultadCienciasBiologicas_73.readFeatures(json_FacultadCienciasBiologicas_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacultadCienciasBiologicas_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacultadCienciasBiologicas_73.addFeatures(features_FacultadCienciasBiologicas_73);
var lyr_FacultadCienciasBiologicas_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FacultadCienciasBiologicas_73, 
                style: style_FacultadCienciasBiologicas_73,
                interactive: true,
                title: '<img src="styles/legend/FacultadCienciasBiologicas_73.png" /> Facultad Ciencias Biologicas'
            });
var format_ContabilidadAntiguo_74 = new ol.format.GeoJSON();
var features_ContabilidadAntiguo_74 = format_ContabilidadAntiguo_74.readFeatures(json_ContabilidadAntiguo_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContabilidadAntiguo_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContabilidadAntiguo_74.addFeatures(features_ContabilidadAntiguo_74);
var lyr_ContabilidadAntiguo_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContabilidadAntiguo_74, 
                style: style_ContabilidadAntiguo_74,
                interactive: true,
                title: '<img src="styles/legend/ContabilidadAntiguo_74.png" /> Contabilidad Antiguo'
            });
var format_Residencia1_75 = new ol.format.GeoJSON();
var features_Residencia1_75 = format_Residencia1_75.readFeatures(json_Residencia1_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residencia1_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residencia1_75.addFeatures(features_Residencia1_75);
var lyr_Residencia1_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Residencia1_75, 
                style: style_Residencia1_75,
                interactive: true,
                title: '<img src="styles/legend/Residencia1_75.png" /> Residencia 1'
            });
var format_Recidencias2_76 = new ol.format.GeoJSON();
var features_Recidencias2_76 = format_Recidencias2_76.readFeatures(json_Recidencias2_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recidencias2_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recidencias2_76.addFeatures(features_Recidencias2_76);
var lyr_Recidencias2_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recidencias2_76, 
                style: style_Recidencias2_76,
                interactive: true,
                title: '<img src="styles/legend/Recidencias2_76.png" /> Recidencias 2'
            });
var format_Residencias3_77 = new ol.format.GeoJSON();
var features_Residencias3_77 = format_Residencias3_77.readFeatures(json_Residencias3_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residencias3_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residencias3_77.addFeatures(features_Residencias3_77);
var lyr_Residencias3_77 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Residencias3_77, 
                style: style_Residencias3_77,
                interactive: true,
                title: '<img src="styles/legend/Residencias3_77.png" /> Residencias 3'
            });
var format_EdificioenConstruccion_78 = new ol.format.GeoJSON();
var features_EdificioenConstruccion_78 = format_EdificioenConstruccion_78.readFeatures(json_EdificioenConstruccion_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdificioenConstruccion_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioenConstruccion_78.addFeatures(features_EdificioenConstruccion_78);
var lyr_EdificioenConstruccion_78 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EdificioenConstruccion_78, 
                style: style_EdificioenConstruccion_78,
                interactive: true,
                title: '<img src="styles/legend/EdificioenConstruccion_78.png" /> Edificio en Construccion'
            });
var format_Residencianuevo_79 = new ol.format.GeoJSON();
var features_Residencianuevo_79 = format_Residencianuevo_79.readFeatures(json_Residencianuevo_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residencianuevo_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residencianuevo_79.addFeatures(features_Residencianuevo_79);
var lyr_Residencianuevo_79 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Residencianuevo_79, 
                style: style_Residencianuevo_79,
                interactive: true,
                title: '<img src="styles/legend/Residencianuevo_79.png" /> Residencia nuevo'
            });
var format_Canchita1_80 = new ol.format.GeoJSON();
var features_Canchita1_80 = format_Canchita1_80.readFeatures(json_Canchita1_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canchita1_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canchita1_80.addFeatures(features_Canchita1_80);
var lyr_Canchita1_80 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canchita1_80, 
                style: style_Canchita1_80,
                interactive: true,
                title: '<img src="styles/legend/Canchita1_80.png" /> Canchita 1'
            });
var format_Canchita2_81 = new ol.format.GeoJSON();
var features_Canchita2_81 = format_Canchita2_81.readFeatures(json_Canchita2_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canchita2_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canchita2_81.addFeatures(features_Canchita2_81);
var lyr_Canchita2_81 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canchita2_81, 
                style: style_Canchita2_81,
                interactive: true,
                title: '<img src="styles/legend/Canchita2_81.png" /> Canchita 2'
            });
var format_Canchita3_82 = new ol.format.GeoJSON();
var features_Canchita3_82 = format_Canchita3_82.readFeatures(json_Canchita3_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canchita3_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canchita3_82.addFeatures(features_Canchita3_82);
var lyr_Canchita3_82 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canchita3_82, 
                style: style_Canchita3_82,
                interactive: true,
                title: '<img src="styles/legend/Canchita3_82.png" /> Canchita 3'
            });
var format_Estadio_83 = new ol.format.GeoJSON();
var features_Estadio_83 = format_Estadio_83.readFeatures(json_Estadio_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estadio_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estadio_83.addFeatures(features_Estadio_83);
var lyr_Estadio_83 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estadio_83, 
                style: style_Estadio_83,
                interactive: true,
                title: '<img src="styles/legend/Estadio_83.png" /> Estadio'
            });
var format_EstadisticaeInformatica_84 = new ol.format.GeoJSON();
var features_EstadisticaeInformatica_84 = format_EstadisticaeInformatica_84.readFeatures(json_EstadisticaeInformatica_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadisticaeInformatica_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadisticaeInformatica_84.addFeatures(features_EstadisticaeInformatica_84);
var lyr_EstadisticaeInformatica_84 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstadisticaeInformatica_84, 
                style: style_EstadisticaeInformatica_84,
                interactive: true,
                title: '<img src="styles/legend/EstadisticaeInformatica_84.png" /> Estadistica e Informatica'
            });
var format_AuditorioMagnoo_85 = new ol.format.GeoJSON();
var features_AuditorioMagnoo_85 = format_AuditorioMagnoo_85.readFeatures(json_AuditorioMagnoo_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuditorioMagnoo_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuditorioMagnoo_85.addFeatures(features_AuditorioMagnoo_85);
var lyr_AuditorioMagnoo_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AuditorioMagnoo_85, 
                style: style_AuditorioMagnoo_85,
                interactive: true,
                title: '<img src="styles/legend/AuditorioMagnoo_85.png" /> Auditorio Magnoo'
            });
var format_Edificiouniversitario_86 = new ol.format.GeoJSON();
var features_Edificiouniversitario_86 = format_Edificiouniversitario_86.readFeatures(json_Edificiouniversitario_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificiouniversitario_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificiouniversitario_86.addFeatures(features_Edificiouniversitario_86);
var lyr_Edificiouniversitario_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Edificiouniversitario_86, 
                style: style_Edificiouniversitario_86,
                interactive: true,
                title: '<img src="styles/legend/Edificiouniversitario_86.png" /> Edificio universitario.'
            });
var format_EstadisticaeInformaticaAntiguo_87 = new ol.format.GeoJSON();
var features_EstadisticaeInformaticaAntiguo_87 = format_EstadisticaeInformaticaAntiguo_87.readFeatures(json_EstadisticaeInformaticaAntiguo_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadisticaeInformaticaAntiguo_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadisticaeInformaticaAntiguo_87.addFeatures(features_EstadisticaeInformaticaAntiguo_87);
var lyr_EstadisticaeInformaticaAntiguo_87 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstadisticaeInformaticaAntiguo_87, 
                style: style_EstadisticaeInformaticaAntiguo_87,
                interactive: true,
                title: '<img src="styles/legend/EstadisticaeInformaticaAntiguo_87.png" /> Estadistica e Informatica Antiguo'
            });
var format_ColegioAplicacion_88 = new ol.format.GeoJSON();
var features_ColegioAplicacion_88 = format_ColegioAplicacion_88.readFeatures(json_ColegioAplicacion_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColegioAplicacion_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColegioAplicacion_88.addFeatures(features_ColegioAplicacion_88);
var lyr_ColegioAplicacion_88 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ColegioAplicacion_88, 
                style: style_ColegioAplicacion_88,
                interactive: true,
                title: '<img src="styles/legend/ColegioAplicacion_88.png" /> Colegio Aplicacion'
            });
var format_AuditoriodeCienciasdelaEducacion_89 = new ol.format.GeoJSON();
var features_AuditoriodeCienciasdelaEducacion_89 = format_AuditoriodeCienciasdelaEducacion_89.readFeatures(json_AuditoriodeCienciasdelaEducacion_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuditoriodeCienciasdelaEducacion_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuditoriodeCienciasdelaEducacion_89.addFeatures(features_AuditoriodeCienciasdelaEducacion_89);
var lyr_AuditoriodeCienciasdelaEducacion_89 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AuditoriodeCienciasdelaEducacion_89, 
                style: style_AuditoriodeCienciasdelaEducacion_89,
                interactive: true,
                title: '<img src="styles/legend/AuditoriodeCienciasdelaEducacion_89.png" /> Auditorio de Ciencias de la Educacion'
            });
var format_DERECHO_90 = new ol.format.GeoJSON();
var features_DERECHO_90 = format_DERECHO_90.readFeatures(json_DERECHO_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERECHO_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERECHO_90.addFeatures(features_DERECHO_90);
var lyr_DERECHO_90 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DERECHO_90, 
                style: style_DERECHO_90,
                interactive: true,
                title: '<img src="styles/legend/DERECHO_90.png" /> DERECHO'
            });
var format_RutasSCSII_1_91 = new ol.format.GeoJSON();
var features_RutasSCSII_1_91 = format_RutasSCSII_1_91.readFeatures(json_RutasSCSII_1_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutasSCSII_1_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutasSCSII_1_91.addFeatures(features_RutasSCSII_1_91);
var lyr_RutasSCSII_1_91 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RutasSCSII_1_91, 
                style: style_RutasSCSII_1_91,
                interactive: true,
                title: '<img src="styles/legend/RutasSCSII_1_91.png" /> Rutas SCSII_1'
            });
var format_Enfermeria1_92 = new ol.format.GeoJSON();
var features_Enfermeria1_92 = format_Enfermeria1_92.readFeatures(json_Enfermeria1_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enfermeria1_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enfermeria1_92.addFeatures(features_Enfermeria1_92);
var lyr_Enfermeria1_92 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Enfermeria1_92, 
                style: style_Enfermeria1_92,
                interactive: true,
                title: '<img src="styles/legend/Enfermeria1_92.png" /> Enfermeria 1'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Finesi_1.setVisible(true);lyr_Administracin_2.setVisible(true);lyr_Sistemas_3.setVisible(true);lyr_Polgonos_Sistemas_4.setVisible(true);lyr_fines1_g1_5.setVisible(true);lyr_FINES_1_G_6.setVisible(true);lyr_Convenciones_7.setVisible(true);lyr_EduPrimaria_8.setVisible(true);lyr_EdificioUnivers_9.setVisible(true);lyr_Agronmica_10.setVisible(true);lyr_BienEstar_11.setVisible(true);lyr_Enfermera_12.setVisible(true);lyr_OTIANTIGUA_13.setVisible(true);lyr_Administracion_14.setVisible(true);lyr_IngAgroindustrial_15.setVisible(true);lyr_Fisica_16.setVisible(true);lyr_AuditorioMagno_17.setVisible(true);lyr_Cafetin_18.setVisible(true);lyr_IngAgricola_19.setVisible(true);lyr_CCABN_20.setVisible(true);lyr_AdministracionAntigua_21.setVisible(true);lyr_Finesinueva_22.setVisible(true);lyr_FINESIANT_23.setVisible(true);lyr_NutricionHumana_24.setVisible(true);lyr_Odontologia_25.setVisible(true);lyr_NutricionLaboratorio_26.setVisible(true);lyr_OtontologiaLaboratorio_27.setVisible(true);lyr_APII_28.setVisible(true);lyr_CCN_29.setVisible(true);lyr_TUR_30.setVisible(true);lyr_SSA_31.setVisible(true);lyr_LABMIN_32.setVisible(true);lyr_MINAI_33.setVisible(true);lyr_INGECONOMICA_34.setVisible(true);lyr_LABOAC_35.setVisible(true);lyr_SINNOM_36.setVisible(true);lyr_QUIM_37.setVisible(true);lyr_VETZOC_38.setVisible(true);lyr_AGRO_39.setVisible(true);lyr_SOCIO_40.setVisible(true);lyr_SCSII_41.setVisible(true);lyr_SCSII_42.setVisible(true);lyr_COME_43.setVisible(true);lyr_ANTROPOLOGIA_44.setVisible(true);lyr_ZOOL_45.setVisible(true);lyr_VET_46.setVisible(true);lyr_TRSO_47.setVisible(true);lyr_ELEC_48.setVisible(true);lyr_CONTA_49.setVisible(true);lyr_ELECN_50.setVisible(true);lyr_CICS_51.setVisible(true);lyr_ARQUITECTURA_52.setVisible(true);lyr_SOANT_53.setVisible(true);lyr_EDIFIS_54.setVisible(true);lyr_PISC_55.setVisible(true);lyr_TOPOGRAFIA_56.setVisible(true);lyr_TOPOANT_57.setVisible(true);lyr_GEOLO_58.setVisible(true);lyr_SISTE_59.setVisible(true);lyr_POST_60.setVisible(true);lyr_ECON_61.setVisible(true);lyr_AUDICC_62.setVisible(true);lyr_EducacionPrimaria_63.setVisible(true);lyr_FacultaddeEducacion_64.setVisible(true);lyr_BiologiaAntiguo_65.setVisible(true);lyr_AlmacenCentral_66.setVisible(true);lyr_SistemasAntiguo_67.setVisible(true);lyr_Biblioteca_68.setVisible(true);lyr_Talleres_69.setVisible(true);lyr_EdificioJuanMuozR_70.setVisible(true);lyr_Medicina_71.setVisible(true);lyr_Centrodediagporimg_72.setVisible(true);lyr_FacultadCienciasBiologicas_73.setVisible(true);lyr_ContabilidadAntiguo_74.setVisible(true);lyr_Residencia1_75.setVisible(true);lyr_Recidencias2_76.setVisible(true);lyr_Residencias3_77.setVisible(true);lyr_EdificioenConstruccion_78.setVisible(true);lyr_Residencianuevo_79.setVisible(true);lyr_Canchita1_80.setVisible(true);lyr_Canchita2_81.setVisible(true);lyr_Canchita3_82.setVisible(true);lyr_Estadio_83.setVisible(true);lyr_EstadisticaeInformatica_84.setVisible(true);lyr_AuditorioMagnoo_85.setVisible(true);lyr_Edificiouniversitario_86.setVisible(true);lyr_EstadisticaeInformaticaAntiguo_87.setVisible(true);lyr_ColegioAplicacion_88.setVisible(true);lyr_AuditoriodeCienciasdelaEducacion_89.setVisible(true);lyr_DERECHO_90.setVisible(true);lyr_RutasSCSII_1_91.setVisible(true);lyr_Enfermeria1_92.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Finesi_1,lyr_Administracin_2,lyr_Sistemas_3,lyr_Polgonos_Sistemas_4,lyr_fines1_g1_5,lyr_FINES_1_G_6,lyr_Convenciones_7,lyr_EduPrimaria_8,lyr_EdificioUnivers_9,lyr_Agronmica_10,lyr_BienEstar_11,lyr_Enfermera_12,lyr_OTIANTIGUA_13,lyr_Administracion_14,lyr_IngAgroindustrial_15,lyr_Fisica_16,lyr_AuditorioMagno_17,lyr_Cafetin_18,lyr_IngAgricola_19,lyr_CCABN_20,lyr_AdministracionAntigua_21,lyr_Finesinueva_22,lyr_FINESIANT_23,lyr_NutricionHumana_24,lyr_Odontologia_25,lyr_NutricionLaboratorio_26,lyr_OtontologiaLaboratorio_27,lyr_APII_28,lyr_CCN_29,lyr_TUR_30,lyr_SSA_31,lyr_LABMIN_32,lyr_MINAI_33,lyr_INGECONOMICA_34,lyr_LABOAC_35,lyr_SINNOM_36,lyr_QUIM_37,lyr_VETZOC_38,lyr_AGRO_39,lyr_SOCIO_40,lyr_SCSII_41,lyr_SCSII_42,lyr_COME_43,lyr_ANTROPOLOGIA_44,lyr_ZOOL_45,lyr_VET_46,lyr_TRSO_47,lyr_ELEC_48,lyr_CONTA_49,lyr_ELECN_50,lyr_CICS_51,lyr_ARQUITECTURA_52,lyr_SOANT_53,lyr_EDIFIS_54,lyr_PISC_55,lyr_TOPOGRAFIA_56,lyr_TOPOANT_57,lyr_GEOLO_58,lyr_SISTE_59,lyr_POST_60,lyr_ECON_61,lyr_AUDICC_62,lyr_EducacionPrimaria_63,lyr_FacultaddeEducacion_64,lyr_BiologiaAntiguo_65,lyr_AlmacenCentral_66,lyr_SistemasAntiguo_67,lyr_Biblioteca_68,lyr_Talleres_69,lyr_EdificioJuanMuozR_70,lyr_Medicina_71,lyr_Centrodediagporimg_72,lyr_FacultadCienciasBiologicas_73,lyr_ContabilidadAntiguo_74,lyr_Residencia1_75,lyr_Recidencias2_76,lyr_Residencias3_77,lyr_EdificioenConstruccion_78,lyr_Residencianuevo_79,lyr_Canchita1_80,lyr_Canchita2_81,lyr_Canchita3_82,lyr_Estadio_83,lyr_EstadisticaeInformatica_84,lyr_AuditorioMagnoo_85,lyr_Edificiouniversitario_86,lyr_EstadisticaeInformaticaAntiguo_87,lyr_ColegioAplicacion_88,lyr_AuditoriodeCienciasdelaEducacion_89,lyr_DERECHO_90,lyr_RutasSCSII_1_91,lyr_Enfermeria1_92];
lyr_Finesi_1.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Administracin_2.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Sistemas_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Polgonos_Sistemas_4.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_fines1_g1_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_FINES_1_G_6.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Convenciones_7.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EduPrimaria_8.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EdificioUnivers_9.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Agronmica_10.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_BienEstar_11.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Enfermera_12.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_OTIANTIGUA_13.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Administracion_14.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_IngAgroindustrial_15.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Fisica_16.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_AuditorioMagno_17.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Cafetin_18.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_IngAgricola_19.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_CCABN_20.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_AdministracionAntigua_21.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Finesinueva_22.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_FINESIANT_23.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_NutricionHumana_24.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Odontologia_25.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_NutricionLaboratorio_26.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_OtontologiaLaboratorio_27.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_APII_28.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_CCN_29.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_TUR_30.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_SSA_31.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_LABMIN_32.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_MINAI_33.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_INGECONOMICA_34.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_LABOAC_35.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_SINNOM_36.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_QUIM_37.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_VETZOC_38.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_AGRO_39.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_SOCIO_40.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_SCSII_41.set('fieldAliases', {'X': 'X', 'Y': 'Y', });
lyr_SCSII_42.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_COME_43.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ANTROPOLOGIA_44.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ZOOL_45.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_VET_46.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_TRSO_47.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ELEC_48.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_CONTA_49.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ELECN_50.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_CICS_51.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ARQUITECTURA_52.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_SOANT_53.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EDIFIS_54.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_PISC_55.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_TOPOGRAFIA_56.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_TOPOANT_57.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_GEOLO_58.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_SISTE_59.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_POST_60.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ECON_61.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_AUDICC_62.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EducacionPrimaria_63.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_FacultaddeEducacion_64.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_BiologiaAntiguo_65.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_AlmacenCentral_66.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_SistemasAntiguo_67.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Biblioteca_68.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Talleres_69.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EdificioJuanMuozR_70.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Medicina_71.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Centrodediagporimg_72.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_FacultadCienciasBiologicas_73.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ContabilidadAntiguo_74.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Residencia1_75.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Recidencias2_76.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Residencias3_77.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EdificioenConstruccion_78.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Residencianuevo_79.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Canchita1_80.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Canchita2_81.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Canchita3_82.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Estadio_83.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EstadisticaeInformatica_84.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_AuditorioMagnoo_85.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Edificiouniversitario_86.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_EstadisticaeInformaticaAntiguo_87.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_ColegioAplicacion_88.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_AuditoriodeCienciasdelaEducacion_89.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_DERECHO_90.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_RutasSCSII_1_91.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Enfermeria1_92.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Finesi_1.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Administracin_2.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Sistemas_3.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Polgonos_Sistemas_4.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_fines1_g1_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_FINES_1_G_6.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Convenciones_7.set('fieldImages', {'begin': '', 'end': '', });
lyr_EduPrimaria_8.set('fieldImages', {'begin': '', 'end': '', });
lyr_EdificioUnivers_9.set('fieldImages', {'begin': '', 'end': '', });
lyr_Agronmica_10.set('fieldImages', {'begin': '', 'end': '', });
lyr_BienEstar_11.set('fieldImages', {'begin': '', 'end': '', });
lyr_Enfermera_12.set('fieldImages', {'begin': '', 'end': '', });
lyr_OTIANTIGUA_13.set('fieldImages', {'begin': '', 'end': '', });
lyr_Administracion_14.set('fieldImages', {'begin': '', 'end': '', });
lyr_IngAgroindustrial_15.set('fieldImages', {'begin': '', 'end': '', });
lyr_Fisica_16.set('fieldImages', {'begin': '', 'end': '', });
lyr_AuditorioMagno_17.set('fieldImages', {'begin': '', 'end': '', });
lyr_Cafetin_18.set('fieldImages', {'begin': '', 'end': '', });
lyr_IngAgricola_19.set('fieldImages', {'begin': '', 'end': '', });
lyr_CCABN_20.set('fieldImages', {'begin': '', 'end': '', });
lyr_AdministracionAntigua_21.set('fieldImages', {'begin': '', 'end': '', });
lyr_Finesinueva_22.set('fieldImages', {'begin': '', 'end': '', });
lyr_FINESIANT_23.set('fieldImages', {'begin': '', 'end': '', });
lyr_NutricionHumana_24.set('fieldImages', {'begin': '', 'end': '', });
lyr_Odontologia_25.set('fieldImages', {'begin': '', 'end': '', });
lyr_NutricionLaboratorio_26.set('fieldImages', {'begin': '', 'end': '', });
lyr_OtontologiaLaboratorio_27.set('fieldImages', {'begin': '', 'end': '', });
lyr_APII_28.set('fieldImages', {'begin': '', 'end': '', });
lyr_CCN_29.set('fieldImages', {'begin': '', 'end': '', });
lyr_TUR_30.set('fieldImages', {'begin': '', 'end': '', });
lyr_SSA_31.set('fieldImages', {'begin': '', 'end': '', });
lyr_LABMIN_32.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_MINAI_33.set('fieldImages', {'begin': '', 'end': '', });
lyr_INGECONOMICA_34.set('fieldImages', {'begin': '', 'end': '', });
lyr_LABOAC_35.set('fieldImages', {'begin': '', 'end': '', });
lyr_SINNOM_36.set('fieldImages', {'begin': '', 'end': '', });
lyr_QUIM_37.set('fieldImages', {'begin': '', 'end': '', });
lyr_VETZOC_38.set('fieldImages', {'begin': '', 'end': '', });
lyr_AGRO_39.set('fieldImages', {'begin': '', 'end': '', });
lyr_SOCIO_40.set('fieldImages', {'begin': '', 'end': '', });
lyr_SCSII_41.set('fieldImages', {'X': '', 'Y': '', });
lyr_SCSII_42.set('fieldImages', {'begin': '', 'end': '', });
lyr_COME_43.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_ANTROPOLOGIA_44.set('fieldImages', {'begin': '', 'end': '', });
lyr_ZOOL_45.set('fieldImages', {'begin': '', 'end': '', });
lyr_VET_46.set('fieldImages', {'begin': '', 'end': '', });
lyr_TRSO_47.set('fieldImages', {'begin': '', 'end': '', });
lyr_ELEC_48.set('fieldImages', {'begin': '', 'end': '', });
lyr_CONTA_49.set('fieldImages', {'begin': '', 'end': '', });
lyr_ELECN_50.set('fieldImages', {'begin': '', 'end': '', });
lyr_CICS_51.set('fieldImages', {'begin': '', 'end': '', });
lyr_ARQUITECTURA_52.set('fieldImages', {'begin': '', 'end': '', });
lyr_SOANT_53.set('fieldImages', {'begin': '', 'end': '', });
lyr_EDIFIS_54.set('fieldImages', {'begin': '', 'end': '', });
lyr_PISC_55.set('fieldImages', {'begin': '', 'end': '', });
lyr_TOPOGRAFIA_56.set('fieldImages', {'begin': '', 'end': '', });
lyr_TOPOANT_57.set('fieldImages', {'begin': '', 'end': '', });
lyr_GEOLO_58.set('fieldImages', {'begin': '', 'end': '', });
lyr_SISTE_59.set('fieldImages', {'begin': '', 'end': '', });
lyr_POST_60.set('fieldImages', {'begin': '', 'end': '', });
lyr_ECON_61.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_AUDICC_62.set('fieldImages', {'begin': '', 'end': '', });
lyr_EducacionPrimaria_63.set('fieldImages', {'begin': '', 'end': '', });
lyr_FacultaddeEducacion_64.set('fieldImages', {'begin': '', 'end': '', });
lyr_BiologiaAntiguo_65.set('fieldImages', {'begin': '', 'end': '', });
lyr_AlmacenCentral_66.set('fieldImages', {'begin': '', 'end': '', });
lyr_SistemasAntiguo_67.set('fieldImages', {'begin': '', 'end': '', });
lyr_Biblioteca_68.set('fieldImages', {'begin': '', 'end': '', });
lyr_Talleres_69.set('fieldImages', {'begin': '', 'end': '', });
lyr_EdificioJuanMuozR_70.set('fieldImages', {'begin': '', 'end': '', });
lyr_Medicina_71.set('fieldImages', {'begin': '', 'end': '', });
lyr_Centrodediagporimg_72.set('fieldImages', {'begin': '', 'end': '', });
lyr_FacultadCienciasBiologicas_73.set('fieldImages', {'begin': '', 'end': '', });
lyr_ContabilidadAntiguo_74.set('fieldImages', {'begin': '', 'end': '', });
lyr_Residencia1_75.set('fieldImages', {'begin': '', 'end': '', });
lyr_Recidencias2_76.set('fieldImages', {'begin': '', 'end': '', });
lyr_Residencias3_77.set('fieldImages', {'begin': '', 'end': '', });
lyr_EdificioenConstruccion_78.set('fieldImages', {'begin': '', 'end': '', });
lyr_Residencianuevo_79.set('fieldImages', {'begin': '', 'end': '', });
lyr_Canchita1_80.set('fieldImages', {'begin': '', 'end': '', });
lyr_Canchita2_81.set('fieldImages', {'begin': '', 'end': '', });
lyr_Canchita3_82.set('fieldImages', {'begin': '', 'end': '', });
lyr_Estadio_83.set('fieldImages', {'begin': '', 'end': '', });
lyr_EstadisticaeInformatica_84.set('fieldImages', {'begin': '', 'end': '', });
lyr_AuditorioMagnoo_85.set('fieldImages', {'begin': '', 'end': '', });
lyr_Edificiouniversitario_86.set('fieldImages', {'begin': '', 'end': '', });
lyr_EstadisticaeInformaticaAntiguo_87.set('fieldImages', {'begin': '', 'end': '', });
lyr_ColegioAplicacion_88.set('fieldImages', {'begin': '', 'end': '', });
lyr_AuditoriodeCienciasdelaEducacion_89.set('fieldImages', {'begin': '', 'end': '', });
lyr_DERECHO_90.set('fieldImages', {'begin': '', 'end': '', });
lyr_RutasSCSII_1_91.set('fieldImages', {'begin': '', 'end': '', });
lyr_Enfermeria1_92.set('fieldImages', {'begin': '', 'end': '', });
lyr_Finesi_1.set('fieldLabels', {'begin': 'header label', 'end': 'no label', });
lyr_Administracin_2.set('fieldLabels', {'begin': 'header label', 'end': 'no label', });
lyr_Sistemas_3.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Polgonos_Sistemas_4.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_fines1_g1_5.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Z': 'no label', });
lyr_FINES_1_G_6.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Convenciones_7.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EduPrimaria_8.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EdificioUnivers_9.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Agronmica_10.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_BienEstar_11.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Enfermera_12.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_OTIANTIGUA_13.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Administracion_14.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_IngAgroindustrial_15.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Fisica_16.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_AuditorioMagno_17.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Cafetin_18.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_IngAgricola_19.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_CCABN_20.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_AdministracionAntigua_21.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Finesinueva_22.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_FINESIANT_23.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_NutricionHumana_24.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Odontologia_25.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_NutricionLaboratorio_26.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_OtontologiaLaboratorio_27.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_APII_28.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_CCN_29.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_TUR_30.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_SSA_31.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_LABMIN_32.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_MINAI_33.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_INGECONOMICA_34.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_LABOAC_35.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_SINNOM_36.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_QUIM_37.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_VETZOC_38.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_AGRO_39.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_SOCIO_40.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_SCSII_41.set('fieldLabels', {'X': 'no label', 'Y': 'no label', });
lyr_SCSII_42.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_COME_43.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ANTROPOLOGIA_44.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ZOOL_45.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_VET_46.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_TRSO_47.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ELEC_48.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_CONTA_49.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ELECN_50.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_CICS_51.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ARQUITECTURA_52.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_SOANT_53.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EDIFIS_54.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_PISC_55.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_TOPOGRAFIA_56.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_TOPOANT_57.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_GEOLO_58.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_SISTE_59.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_POST_60.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ECON_61.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_AUDICC_62.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EducacionPrimaria_63.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_FacultaddeEducacion_64.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_BiologiaAntiguo_65.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_AlmacenCentral_66.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_SistemasAntiguo_67.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Biblioteca_68.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Talleres_69.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EdificioJuanMuozR_70.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Medicina_71.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Centrodediagporimg_72.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_FacultadCienciasBiologicas_73.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ContabilidadAntiguo_74.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Residencia1_75.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Recidencias2_76.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Residencias3_77.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EdificioenConstruccion_78.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Residencianuevo_79.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Canchita1_80.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Canchita2_81.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Canchita3_82.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Estadio_83.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EstadisticaeInformatica_84.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_AuditorioMagnoo_85.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Edificiouniversitario_86.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_EstadisticaeInformaticaAntiguo_87.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_ColegioAplicacion_88.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_AuditoriodeCienciasdelaEducacion_89.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_DERECHO_90.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_RutasSCSII_1_91.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Enfermeria1_92.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Enfermeria1_92.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});