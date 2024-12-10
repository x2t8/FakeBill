function thongbao(status, message) {
    const notyf = new Notyf({
        position: {
            x: 'right',
            y: 'top',
        },
        types: [
            {
                type: 'error', // Loại mặc định là 'error'
                background: '#FA5252',
                icon: {
                    className: 'fa fa-times',
                    tagName: 'span',
                    color: '#fff'
                },
                dismissible: false
            },
            {
                type: 'success', // Loại success
                background: '#2D9E2F',
                icon: {
                    className: 'fa fa-check',
                    tagName: 'span',
                    color: '#fff'
                },
                dismissible: false
            },
            {
                type: 'warning', // Loại warning
                background: '#FF8C00',
                icon: {
                    className: 'fa fa-exclamation-triangle',
                    tagName: 'span',
                    color: '#fff'
                },
                dismissible: false
            }
        ]
    });

    // Kiểm tra status và chọn loại thông báo tương ứng
    if (status === 'error') {
        notyf.open({
            type: 'error',
            message: message || 'Đã có lỗi xảy ra.'
        });
    } else if (status === 'success') {
        notyf.open({
            type: 'success',
            message: message || 'Thành công!'
        });
    } else if (status === 'warning') {
        notyf.open({
            type: 'warning',
            message: message || 'Cảnh báo! Kiểm tra lại thông tin.'
        });
    } else {
        // Nếu status không phải là 'error', 'success', hoặc 'warning', mặc định sẽ là 'error'
        notyf.open({
            type: 'error',
            message: message || 'Đã có lỗi xảy ra.'
        });
    }
}
