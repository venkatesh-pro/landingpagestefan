'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' : 'data-bs-target="#xs-controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' :
                                            'id="xs-controllers-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' : 'data-bs-target="#xs-injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' :
                                        'id="xs-injectables-links-module-AppModule-29625e96065ce164c69fc99014fa53cd9cee33227b8cc1ef282a97b92fc2bffb28d1e1f9fc53a9bae9dc17c032100001d1e477d40daf92dca956e7d7b6ca36e5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SendMailModule.html" data-type="entity-link" >SendMailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SendMailModule-0b23cbfff29543f9dbc88451a34ea3eca49a609198c4536aaa7af95543b21cdb2b5f12045ec85b88c00b5fdb4042316b4316b6acc1beb718a12c9a405509ecce"' : 'data-bs-target="#xs-injectables-links-module-SendMailModule-0b23cbfff29543f9dbc88451a34ea3eca49a609198c4536aaa7af95543b21cdb2b5f12045ec85b88c00b5fdb4042316b4316b6acc1beb718a12c9a405509ecce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SendMailModule-0b23cbfff29543f9dbc88451a34ea3eca49a609198c4536aaa7af95543b21cdb2b5f12045ec85b88c00b5fdb4042316b4316b6acc1beb718a12c9a405509ecce"' :
                                        'id="xs-injectables-links-module-SendMailModule-0b23cbfff29543f9dbc88451a34ea3eca49a609198c4536aaa7af95543b21cdb2b5f12045ec85b88c00b5fdb4042316b4316b6acc1beb718a12c9a405509ecce"' }>
                                        <li class="link">
                                            <a href="injectables/SendMailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SendMailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' : 'data-bs-target="#xs-controllers-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' :
                                            'id="xs-controllers-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' : 'data-bs-target="#xs-injectables-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' :
                                        'id="xs-injectables-links-module-UserModule-970befc61818ee883c9b65604545aeb819ac598d29902ecc854467a4c2be74042cfe40228e592c3bba03104add5f88d1aeff1bec047e039b332119b92763d394"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});