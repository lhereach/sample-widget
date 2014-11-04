$(document).ready(function () {
            $('#combobox').kendoComboBox({
				dataTextField: "text",
				dataValueField: "value",
				dataSource: [
					{text: "CSS3", value: "1"},
					{text: "JavScript", value: "2"},
					{text: "jQuery", value: "3"},
					{text: "HTML5", value: "4"}
				],
				animation: {
					open: {
						effects: "fadeIn",
						duration: 1000,
						show: true,
						hide: false
					},
					close: {
						effects: "fadeOut",
						duration: 1000,
						hide: true,
						show: false
					}
				}
			});
		});
