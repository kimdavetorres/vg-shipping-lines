$(document).ready(function() {
    $('#lgn_submit').click(function() {
        if($('#u_name').val() == '') {
            $('#u_name').css('border', '1px solid #dc3545');
            $('#p_wd').css('border', '1px solid #dc3545');
            return false;
        }else if($('#p_wd').val() == '') {
            $('#p_wd').css('border', '1px solid #dc3545');
            return false;
        }else {
            if($('#u_name').val() == 'kimdavetorres' && $('#p_wd').val() == '123456789012') {
                $('form').attr({
                    'action':'admin/welcome.php',
                });
            }else if($('#u_name').val() == 'jayautentico' && $('#p_wd').val() == '123456789012') {
                $('form').attr({
                    'action':'ticket-in-charge.php',
                });
            }else {
                alert("No existing account!");
                return false;
            }
        }
    });
});
