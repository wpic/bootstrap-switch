
/* ========================================================================
 * bootstrap-switch - v1.0
 * https://github.com/wpic/bootstrap-switch
 * ========================================================================
 * Copyright 2014 WPIC, Hamed Abdollahpour
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function ( $ ) {

	$.fn.bootstrapSwitch = function( options ) {

		var settings = $.extend({
			on: 'On',
			off: 'Off	',
			onClass: 'primary',
			offClass: 'danger'
			}, options );

		return this.each(function(e) {
			var c = $(this);
			var div = $("<div class='btn-group btn-toggle'></div>").insertAfter(this);
			var on = $("<button class='btn btn-primary'></button>").text(settings.on).css('margin-right', '0px').appendTo(div);
			var off = $("<button class='btn btn-danger'></button>").text(settings.off).css('margin-left', '0px').appendTo(div);

			function applyChange(b) {
				if(b) {
					on.attr('class', 'btn btn-' + settings.onClass);
					off.attr('class', 'btn btn-default active');
				}
				else {
					on.attr('class', 'btn btn-default active');
					off.attr('class', 'btn btn-' + settings.offClass);
				}
			}
			applyChange(c.is(':checked'));

			on.click(function() {c.prop("checked", !c.prop("checked")).trigger('change')});
			off.click(function() {c.prop("checked", !c.prop("checked")).trigger('change')});

			$(this).hide().on('change', function() {
				applyChange(c.is(':checked'))
			});
		});
	};
} ( jQuery ));

