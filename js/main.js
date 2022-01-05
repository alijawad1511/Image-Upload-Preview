$(document).ready(function () {

    var imageNames = [];
    var file;
    var imgReader;

    $('input[type="file"]').on('change', (e) => {
        var files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            file = files[i];
            imageNames.push(files[i].name);

            imgReader = new FileReader();
            imgReader.fileName = file.name;

            imgReader.addEventListener('load', (e) => {
                var imgFile = e.target;

                var li = document.createElement('li');
                li.innerHTML = `<img src="${imgFile.result}" title="${imgFile.name}">
                            <div class="post_hover_effect">
                                <div class="hover_effect_container">
                                    <a href="javascript:void(0);" class="remove_pic" data-id="${e.target.fileName}">
                                        <i " class='fas fa-times' data-id="${e.target.fileName}" aria-hidden='true'></i>
                                    </a>                                    
                                </div>
                            </div>`;

                // <a href="javascript:void(0);" class="remove_pic" data-id="${e.target.fileName}"></a>

                li.classList.add('upload_img_box');
                $('#upload_images_list').prepend(li);

            });
            
            imgReader.readAsDataURL(file);
        }


    });
    
    // console.log('Done');

    $('body').on('click', '.remove_pic', function () {

        // Remove 'li' which contain images being removed
        $(this).parent().parent().parent().remove();

        // Remove Image Name from array
        var removeItem = $(this).attr('data-id');
        var index = imageNames.indexOf(removeItem);
        if (index != -1) {
            imageNames.splice(index, 1);
        }


    });

});

