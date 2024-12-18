## Directives
- used to change the layout or behavior of the dom

### Types
- Components( Self-contained directives )
- Structural
- Attribute

### Custom Attribute Directives

- can create and use it a particular use case like enabling only right click Or styling an element

### Host Element
- The element on which the custom-attribute directive applied, referred as the Host Element
- Because this is the element hosting the directive

### Renderer2
- provides an abstraction layer for manipulating DOM elements
- Prevents direct DOM access, improving security
- Helps avoid XSS vulnerabilities
- Essential for creating cross-platform Angular applications


### HostListener
- @HostListener()
- if the directive is to be applied based on an event / or an user action, then HostListener will be used
- Example:
    ```typescript
    import {
        Directive,
        ElementRef,         
        HostListener,         
        Renderer2,
    } from '@angular/core';

    @Directive({
        selector: '[appBold]',
        standalone: true,
    })
    export class BoldDirective {
        constructor(private hostElement: ElementRef<HTMLElement>, private renderer: Renderer2) {}

        @HostListener('mouseenter')
        onMouseEnter() {
            this.renderer.setStyle(this.hostElement.nativeElement, 'fontWeight', 'bold');
        }

        @HostListener('mouseleave')
        onMouseLeave() {
            this.renderer.setStyle(this.hostElement.nativeElement, 'fontWeight', 'normal');      
        }
    }
 
### HostBinding
- @HostBinding()
- If a property needs to be captured based on an event / a user action
- Example:
   ```typescript
    import {
        Directive,
        ElementRef,         
        HostListener, 
        HostBinding        
        Renderer2,
    } from '@angular/core';

    @Directive({
        selector: '[appBold]',
        standalone: true,
    })
    export class BoldDirective {
        constructor(private hostElement:            ElementRef<HTMLElement>, private renderer: Renderer2) {}
        @HostBinding('style.border') border : string = ''
        @HostListener('mouseenter')
        onMouseEnter() {
            this.border "10px solid red"
            this.renderer.setStyle(this.hostElement.nativeElement, 'fontWeight', 'bold');
        }

        @HostListener('mouseleave')
        onMouseLeave() {
            this.renderer.setStyle(this.hostElement.nativeElement, 'fontWeight', 'normal');      
        }
    }
