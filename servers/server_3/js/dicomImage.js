var element = $('#dicomImage').get(0);
var currentImage = 1;
var imageId = 'example://' + currentImage;

$(document).ready(function() {
    var element = $('#dicomImage').get(0);
    cornerstone.enable(element);
    var imageIds = [
        'example://3'
    ];
    var currentImageIndex = 0;
    // show image #1 initially
    function updateTheImage(imageIndex) {
        currentImageIndex = imageIndex;
        cornerstoneTools.toolStyle.setToolWidth(3);
        cornerstoneTools.toolColors.setToolColor("#ffcc33");
        cornerstoneTools.toolColors.setActiveColor("#0099ff");
        cornerstoneTools.toolColors.setFillColor("#0099ff");
        // image enable the dicomImage element
        cornerstone.enable(element);
        cornerstone.loadImage(imageIds[currentImageIndex]).then(function(image) {
            cornerstone.displayImage(element, image);
            cornerstoneTools.mouseInput.enable(element);
            // Enable all tools we want to use with this element
            cornerstoneTools.freehand.activate(element, 1);
            activate("#activate");
            function activate(id)
            {
                $('a').removeClass('active');
                $(id).addClass('active');
            }
            // Tool button event handlers that set the new active tool
            $('#disable').click(function() {
                activate("#disable");
                cornerstoneTools.freehand.disable(element);
                return false;
            });
            $('#enable').click(function() {
                activate("#enable");
                cornerstoneTools.freehand.enable(element);
                return false;
            });
            $('#activate').click(function() {
                activate("#activate");
                cornerstoneTools.freehand.activate(element, 1);
                return false;
            });
            $('#deactivate').click(function() {
                activate("#deactivate");
                cornerstoneTools.freehand.deactivate(element, 1);
                return false;
            });
            $('#clearToolData').click(function() {
                var toolStateManager = cornerstoneTools.getElementToolStateManager(element);
                // Note that this only works on ImageId-specific tool state managers (for now)
                toolStateManager.clear(element)
                cornerstone.updateImage(element);
            });
        });
    };

    updateTheImage(0);

});
