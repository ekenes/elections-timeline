import{bo as s,bp as h,bq as t}from"./index-02eff6e6.js";import{i}from"./AGraphicContainer-6366aa45.js";class o extends i{renderChildren(e){for(const r of this.children)r.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some(r=>r.hasData)){switch(e.drawPhase){case s.MAP:this._renderChildren(e,h.All);break;case s.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){t(e,!1,r=>{this._renderChildren(r,h.Highlight)})}}export{o as t};
