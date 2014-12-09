angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$ionicLoading) {


				  // Setup the loader
				  $ionicLoading.show({
				    content: 'Loading',
				    animation: 'fade-in',
				    showBackdrop: true,
				    maxWidth: 200,
				    showDelay: 0
				  });
  

	              $http.get("http://forex.cbm.gov.mm/api/latest").then(function(resp) {
                  
                  $scope.live = "Online";
                  $scope.friends =  [
                                         { name :"USD" , amount :resp.data.rates.USD.replace(',','') },
                                         { name :"CNY" , amount :resp.data.rates.CNY.replace(',','') },
                                         { name :"CHF" , amount :resp.data.rates.CHF.replace(',','') },
                                         { name :"ZAR" , amount :resp.data.rates.ZAR.replace(',','') },
                                         { name :"ILS" , amount :resp.data.rates.ILS.replace(',','') },
                                         { name :"LAK" , amount :resp.data.rates.LAK.replace(',','') },
                                         { name :"EGP" , amount :resp.data.rates.EGP.replace(',','') },
                                         { name :"BDT" , amount :resp.data.rates.BDT.replace(',','') },
                                         { name :"NPR" , amount :resp.data.rates.NPR.replace(',','') },
                                         { name :"PKR" , amount :resp.data.rates.PKR.replace(',','') },
                                         { name :"IDR" , amount :resp.data.rates.IDR.replace(',','') },
                                         { name :"KHR" , amount :resp.data.rates.KHR.replace(',','') },
                                         { name :"SGD" , amount :resp.data.rates.SGD.replace(',','') },
                                         { name :"SAR" , amount :resp.data.rates.SAR.replace(',','') },
                                         { name :"THB" , amount :resp.data.rates.THB.replace(',','') },
                                         { name :"CZK" , amount :resp.data.rates.CZK.replace(',','') },
                                         { name :"JPY" , amount :resp.data.rates.JPY.replace(',','') },
                                         { name :"SEK" , amount :resp.data.rates.SEK.replace(',','') },
                                         { name :"KES" , amount :resp.data.rates.KES.replace(',','') },
                                         { name :"MYR" , amount :resp.data.rates.MYR.replace(',','') },
                                         { name :"HKD" , amount :resp.data.rates.HKD.replace(',','') },
                                         { name :"BRL" , amount :resp.data.rates.BRL.replace(',','') },
                                         { name :"PHP" , amount :resp.data.rates.PHP.replace(',','') },
                                         { name :"NOK" , amount :resp.data.rates.NOK.replace(',','') },
                                         { name :"CAD" , amount :resp.data.rates.CAD.replace(',','') },
                                         { name :"GBP" , amount :resp.data.rates.GBP.replace(',','') },
                                         { name :"RSD" , amount :resp.data.rates.RSD.replace(',','') },
                                         { name :"VND" , amount :resp.data.rates.VND.replace(',','') },
                                         { name :"KRW" , amount :resp.data.rates.KRW.replace(',','') },
                                         { name :"AUD" , amount :resp.data.rates.AUD.replace(',','') },
                                         { name :"DKK" , amount :resp.data.rates.DKK.replace(',','') },
                                         { name :"KWD" , amount :resp.data.rates.KWD.replace(',','') },
                                         { name :"NZD" , amount :resp.data.rates.NZD.replace(',','') },
                                         { name :"INR" , amount :resp.data.rates.INR.replace(',','') },
                                         { name :"BND" , amount :resp.data.rates.BND.replace(',','') },
                                         { name :"EUR" , amount :resp.data.rates.EUR.replace(',','') },
                                         { name :"LKR" , amount :resp.data.rates.LKR.replace(',','') },
                                         { name :"RUB" , amount :resp.data.rates.RUB.replace(',','') }
                          ];
                    $ionicLoading.hide();

                  }, function(err) {

                  		$scope.live = "Offline";
                  		$scope.friends =  [
									   { name :"USD" , amount:'1025.0' },
									   { name :"CNY" , amount:'166.54' },
									   { name :"CHF" , amount:'1055.9' },
									   { name :"ZAR" , amount:'91.515' },
									   { name :"ILS" , amount:'257.93' },
									   { name :"LAK" , amount:'12.717' },
									   { name :"EGP" , amount:'143.35' },
									   { name :"BDT" , amount:'13.256' },
									   { name :"NPR" , amount:'10.348' },
									   { name :"PKR" , amount:'10.099' },
									   { name :"IDR" , amount:'8.3283' },
									   { name :"KHR" , amount:'25.217' },
									   { name :"SGD" , amount:'781.01' },
									   { name :"SAR" , amount:'273.10' },
									   { name :"THB" , amount:'31.174' },
									   { name :"CZK" , amount:'45.797' },
									   { name :"JPY" , amount:'855.45' },
									   { name :"SEK" , amount:'136.38' },
									   { name :"KES" , amount:'11.356' },
									   { name :"MYR" , amount:'297.27' },
									   { name :"HKD" , amount:'132.23' },
									   { name :"BRL" , amount:'399.34' },
									   { name :"PHP" , amount:'22.990' },
									   { name :"NOK" , amount:'145.42' },
									   { name :"CAD" , amount:'900.19' },
									   { name :"GBP" , amount:'1603.9' },
									   { name :"RSD" , amount:'10.444' },
									   { name :"VND" , amount:'4.7996' },
									   { name :"KRW" , amount:'92.168' },
									   { name :"AUD" , amount:'859.86' },
									   { name :"DKK" , amount:'169.98' },
									   { name :"KWD" , amount:'3,513.3' },
									   { name :"NZD" , amount:'797.20' },
									   { name :"INR" , amount:'16.588' },
									   { name :"BND" , amount:'781.07' },
									   { name :"EUR" , amount:'1269.7' },
									   { name :"LKR" , amount:'7.8129' },
									   { name :"RUB" , amount:'19.087' }
									  ];
					$ionicLoading.hide();
                  });
})

.controller('AboutCtrl', function($scope) {
});
