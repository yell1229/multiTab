(function(global, $) {

    'use strict';

    /**
     * --------------------------------
     * MultiTab 객체 생성자 함수
     * --------------------------------
     */
    function MultiTab ($el, options) {
        this.init($el, options);
    }

    /**
     * --------------------------------
     * MultiTab 프로토타입 객체
     * --------------------------------
     */
    MultiTab.prototype = {

        // ----------------------------------------------------------------------------
        // 멀티-탭 객체 초기화 메소드
        init: function( $el, options ) {

            // this는 MultiTab 객체를 가리킴
            this.$el = $el;

            // options 데이터 유형이 문자형이라면
            if ( $.type(options) === 'string' ) {
                // 헬퍼함수 strToObj() 함수 수행
                options = strToObj( options, $.fn.multiTab.defaults.divider );
            }

            // 옵션 설정
            this.config = $.extend({}, $.fn.multiTab.defaults, options);

            // 이벤트
            this.events();

        },

        // ----------------------------------------------------------------------------
        // 이벤트 설정 메소드
        events: function() {

            var tabWidget = this,
                evt       = tabWidget.config.evt;

            tabWidget.$el.on(evt, function(e){

                // 브라우저 기본동작 차단
                e.preventDefault();

                var $this = $cache(this),
                    $img  = $this.find('img'),
                    $parent, $target;

                $img.attr('src', $img.attr('src').replace('_off','_on') );

                $parent = $this.closest('li').siblings();

                $.each($parent, function(index,el) {

                    var $a   = $parent.eq(index),
                        $img = $a.find('img');

                    $img.attr('src', $img.attr('src').replace('_on','_off') );

                });

                $target = $cache( $this.attr( tabWidget.config.attr ) );

                $target.siblings().filter('[id]').hide();
                $target.show();

            });
        }

    };

    /**
     * --------------------------------
     * 헬퍼함수
     * --------------------------------
     */
    function strToObj(str, divider) {
        var dataArr = str.split( divider ), // 'evt: mouseenter' → ['evt', ' mouseenter']
            key     = dataArr[0].trim(),    // 'evt'
            value   = dataArr[1].trim(),    // 'mouseenter'
            obj     = {};

        obj[key] = value;

        return obj;
    }

    function $cache(el) {
        if ( typeof el === 'string' ) { el = document.querySelector(el); }
        if ( !$.data(el, '$') ) {
            $.data(el, '$', $(el));
        }
        return $.data(el, '$');
    }


    /**
     * --------------------------------
     * 플러그인 작성
     * --------------------------------
     */
    $.fn.multiTab = $.fn.multiTab || function( options ) {

        // 플러그인 연결 $() 인스턴스 객체 참조
        var $this = this;

        // $this에 개별 적용(반복)
        $.each($this, function(index,el) {

            // 개별 $() 인스턴스 객체 참조
            var $$this = $this.eq(index);

            // MultiTab 객체 초기화 수행
            new MultiTab( $$this, options );

            // 체이닝 설정
            return $$this;

        });
    };

    /**
     * --------------------------------
     * 플러그인 옵션 기본 값
     * --------------------------------
     */
    $.fn.multiTab.defaults = {
        attr    : 'href',
        evt     : 'click',
        divider : ':'
    };

})(window, window.jQuery);