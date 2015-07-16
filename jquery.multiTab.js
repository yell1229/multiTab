(function(global,$){
    'use strict';
    //default tab 기능 추가예정.
    $.fn.multiTab = $.fn.multiTab || function(getAttr,evt){//getAttr : 클릭시 적용되는 contents box, evt: 이벤트 종류
        var $this = this;   

        $.each($this,function(index,el){
            var $$this = $this.eq(index);
            console.log(getAttr);
            getAttr =  getAttr || 'href';
            var $target = $$this.attr(getAttr);
            evt = evt ||'click';
            $$this.on(evt,function(e){
                e.preventDefault();               
                $$this.find('img').attr('src',$$this.find('img').attr('src').replace('_off','_on'));
                var $parent = $$this.closest('li').siblings();// li list
                $.each($parent,function(index,el){
                    var $a = $parent.eq(index);
                    $a.find('img').attr('src',$a.find('img').attr('src').replace('_on','_off'));
                });
                $($target).siblings().filter('[id]').hide();
                $($target).show();
            });

        });
        return this;
    };
})(window,window.jQuery);