
$(function(){ 

  var mavlinkAPI = new Mavelous.MavlinkAPI({ url: '/mavlink/' });

  var pfdView = new Mavelous.PFDView({
    mavlinkSrc: mavlinkAPI,
    container: 'pfd'
  });

  var mmapModel = new Mavelous.MMapModel({ mavlinkSrc: mavlinkAPI });
  var mmapProviderModel = new Mavelous.MMapProviderModel();
  var mapSettings = new Mavelous.MMapSettingsView({
    providerModel: mmapProviderModel,
    mapModel: mmapModel
  });
  var guideModel = new Mavelous.GuideModel({ mavlinkSrc: mavlinkAPI });
  var guideAltView   = new Mavelous.GuideAltitudeView({ model: guideModel });
  var mapView = new Mavelous.MMapView({
    providerModel: mmapProviderModel,
    mapModel: mmapModel,
    guideModel: guideModel
  });

  var commStatusModel = new Mavelous.CommStatusModel({
    mavlinkSrc: mavlinkAPI
  });
  var commStatusButtonView = new Mavelous.CommStatusButtonView({
    model: commStatusModel,
    el: $('#navbar-btn-link')
  });

  var droneView = new Mavelous.DroneView({ mavlinkSrc: mavlinkAPI });

  var gpsButtonView = new Mavelous.GpsButtonView({
    mavlinkSrc: mavlinkAPI,
    el: $('#navbar-btn-gps')
  });

  var statustextView = new Mavelous.StatustextView({ mavlinkSrc: mavlinkAPI });
  var modeStringView = new Mavelous.ModeStringView({
    mavlinkSrc: mavlinkAPI,
    el: $('#pfd_modestringview')
  });

  setInterval(function() {
    mavlinkAPI.update();
  }, 250); 

});
