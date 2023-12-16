var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_kec_0 = new ol.format.GeoJSON();
var features_kec_0 = format_kec_0.readFeatures(json_kec_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kec_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kec_0.addFeatures(features_kec_0);var lyr_kec_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kec_0, 
                style: style_kec_0,
    title: 'kec<br />\
    <img src="styles/legend/kec_0_0.png" /> rendah<br />\
    <img src="styles/legend/kec_0_1.png" /> lumayan rendah<br />\
    <img src="styles/legend/kec_0_2.png" />  tinggi<br />\
    <img src="styles/legend/kec_0_3.png" />  cukup tinggi<br />\
    <img src="styles/legend/kec_0_4.png" />  sangat tinggi<br />'
        });

lyr_kec_0.setVisible(true);
var layersList = [baseLayer,lyr_kec_0];
lyr_kec_0.set('fieldAliases', {'kecamatan': 'kecamatan', 'layak huni': 'layak huni', 'tidaklayak': 'tidaklayak', 'JPenduduk': 'JPenduduk', 'tahun': 'tahun', 'layakhuni': 'layakhuni', 'tdkLayak': 'tdkLayak', 'jmlhPend': 'jmlhPend', 'tahunn': 'tahunn', });
lyr_kec_0.set('fieldImages', {'kecamatan': 'TextEdit', 'layak huni': 'TextEdit', 'tidaklayak': 'TextEdit', 'JPenduduk': 'TextEdit', 'tahun': 'TextEdit', 'layakhuni': 'TextEdit', 'tdkLayak': 'TextEdit', 'jmlhPend': 'TextEdit', 'tahunn': 'TextEdit', });
lyr_kec_0.set('fieldLabels', {'kecamatan': 'inline label', 'layak huni': 'inline label', 'tidaklayak': 'inline label', 'JPenduduk': 'inline label', 'tahun': 'no label', 'layakhuni': 'inline label', 'tdkLayak': 'inline label', 'jmlhPend': 'inline label', 'tahunn': 'no label', });
lyr_kec_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});