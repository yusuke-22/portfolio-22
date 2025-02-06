$(function () {

    $('.toggle-btn').click(function () {
        $('header').toggleClass('open');
    });
    $(".header-nav a").on("click", function () {
        $("header").toggleClass("open");
    });

    $(window).scroll(function () {
        // クラスを追加するwindowの位置を設定
        var scrollTop = $(this).scrollTop();
        var scrollBottom = scrollTop + $(this).height();
        var effectPos = scrollBottom - 300;

        // eachでliを順番に処理
        $(".service-list").each(function (i) {
            if (effectPos > $(this).offset().top) {
                var that = this;

                // 0.2s毎にずれて表示
                setTimeout(function () {
                    $(that).addClass("fadein1");
                }, 200 * i);
            }
        });
    });

    $(window).scroll(function () {
        // クラスを追加するwindowの位置を設定
        var scrollTop = $(this).scrollTop();
        var scrollBottom = scrollTop + $(this).height();
        var effectPos = scrollBottom - 300;

        // eachでliを順番に処理
        $(".stregths-item").each(function (i) {
            if (effectPos > $(this).offset().top) {
                var that = this;

                // 0.2s毎にずれて表示
                setTimeout(function () {
                    $(that).addClass("fadein1");
                }, 200 * i);
            }
        });
    });

    $(".photo-list").slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(function () {
        var hash = location.hash;
        if (hash) {
            var target = $('[id="' + hash + '"]');//offset()を使うためjQueryオブジェクト化
            if (!target.length) return;/* targetがなかったときはそれ以降の処理をしない */
            // 移動先を数値で取得
            $(window).on('load', function () {
                history.replaceState('', '', './');/* 再読み込みしたときにスムーススクロールしないようにhashを取り除く */

                // //loadの中に書くことで、画像を読み込んだ後に実行されるようになる
                // //loadの中に書かないと画像が読み込まれる前にoffset().topしてしまうため、正しい位置にならない
                // var position = target.offset().top;
                // //headerの高さ
                // var headerHeight = $('#header').innerHeight();


                // position = position - headerHeight;

                let href = $(this).attr("href");
                // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
                let target = $(href == "#" || href == "" ? "html" : href);
                // ページトップからジャンプ先の要素までの距離を取得
                let position = target.offset().top;

                // スムーススクロール
                $('body,html').animate({ scrollTop: position }, 300, 'swing');

            });
        }
    });

    $(document).ready(function () {
        // 初期状態でボタンの透明度を0.5に設定
        $('.btn').css('opacity', '0.5');

        // 入力フィールドの状態を監視するイベントハンドラ
        $('input, textarea').on('input', function () {
            // すべての input と textarea の値をチェック
            let allFilled = $('input, textarea').filter(function () {
                return $(this).val().trim() === ''; // 空の要素をチェック
            }).length === 0;

            // 全て入力があれば opacity を 1 に設定、どれか空なら 0.5 に設定
            if (allFilled) {
                $('.btn').css('opacity', '1');
            } else {
                $('.btn').css('opacity', '0.5');
            }
        });
    });

    
});
