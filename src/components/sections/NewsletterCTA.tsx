import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../utils/get-data-attrs';
import Action from '../atoms/Action';

export default function NewsletterCTA(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-f';
    const bgSize = props.backgroundSize || 'inset';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const sectionFlexDirection = sectionStyles.flexDirection || 'row';
    const sectionAlignItems = sectionStyles.alignItems || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-cta-section',
                'sb-component-newsletter-cta',
                bgSize === 'inset' ? 'flex' : null,
                bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                sectionStyles.margin || 'mx-[1rem] mt-[4rem] mb-[2rem]'
            )}
        >
            <div
                className={classNames(
                    colors,
                    'flex',
                    'flex-col',
                    'justify-center',
                    'relative',
                    bgSize === 'inset' ? 'w-full' : null,
                    bgSize === 'inset' ? mapMaxWidthStyles(sectionWidth) : null,
                    mapMinHeightStyles(sectionHeight),
                    sectionStyles.borederRadius || 'rounded-lg',
                    sectionStyles.padding || 'p-[36px]',
                    sectionStyles.borderColor,
                    sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                    sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                    sectionStyles.boxShadow ? mapStyles({ boxShadow: sectionStyles.boxShadow }) : null
                )}
                style={{
                    borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
                }}
            >
                {/* {props.backgroundImage && ctaBackgroundImage(props.backgroundImage)} */}
                <div
                    className={classNames(
                        'relative',
                        'w-full',
                        bgSize === 'full' ? 'flex' : null,
                        bgSize === 'full' ? mapStyles({ justifyContent: sectionJustifyContent }) : null
                    )}
                >
                    <div
                        className={classNames(
                            'w-full',
                            bgSize === 'full' ? mapMaxWidthStyles(sectionWidth) : null
                        )}
                    >
                        <div
                            className={classNames(
                                'flex',
                                mapFlexDirectionStyles(sectionFlexDirection),
                                mapStyles({ alignItems: sectionAlignItems }),
                                'space-y-8',
                                {
                                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row'
                                }
                            )}
                        >
                            {ctaBody(props)}
                            {ctaActions(props)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

// function ctaBackgroundImage(image) {
//     const imageUrl = image.url;
//     if (!imageUrl) {
//         return null;
//     }
//     const imageStyles = image.styles?.self || {};
//     const imageOpacity = imageStyles.opacity || imageStyles.opacity === 0 ? imageStyles.opacity : 100;
//     return (
//         <div
//             className="bg-cover bg-center block absolute inset-0"
//             style={{
//                 backgroundImage: `url('${imageUrl}')`,
//                 opacity: imageOpacity * 0.01
//             }}
//         />
//     );
// }

function ctaBody(props) {
    if (!props.title && !props.text) {
        return null;
    }
    const styles = props.styles || {};
    return (
        < div className="w-full lg:flex-grow" >
            {
                props.title && (
                    <div>
                        <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                            {props.title}
                        </h2>

                    </div>


                )
            }
            {
                props.text && (
                    <div>
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-4': props.title })}
                            data-sb-field-path=".text"
                        >
                            {props.text}
                        </Markdown>

                        <div id="revue-embed">
                            <form
                                action="https://www.getrevue.co/profile/theryanfurrer/add_subscriber"
                                method="post"
                                id="revue-form"
                                name="revue-form"
                                target="_blank"
                            >
                                <div className="revue-form-group">
                                    <label htmlFor="member_first_name">First name</label>
                                    <input
                                        className="revue-form-field block"
                                        type="text"
                                        name="member[first_name]"
                                        id="member_first_name"
                                        autoCapitalize="on"
                                    />
                                </div>
                                <div className="revue-form-group">
                                    <label htmlFor="member_email">Email</label>
                                    <input
                                        className="revue-form-field block"
                                        type="email"
                                        name="member[email]"
                                        id="member_email"
                                    />
                                </div>
                                <div className="revue-form-actions">
                                    <input
                                        type="submit"
                                        defaultValue="Subscribe"
                                        name="member[subscribe]"
                                        id="member_submit"
                                    />
                                </div>
                                <div className="revue-form-footer">
                                    <p className=" light-font">
                                        <small>
                                            By subscribing, you agree with Revue's
                                    <a
                                                target="_blank"
                                                href="https://www.getrevue.co/terms"
                                                rel="noopener noreferrer"
                                            >
                                                &nbsp;Terms of Service{" "}
                                            </a>
                                            and
                                    <a
                                                target="_blank"
                                                href="https://www.getrevue.co/privacy"
                                                rel="noopener noreferrer"
                                            >
                                                &nbsp;Privacy Policy
                                    </a>
                                            . Powered by
                                    <a
                                                href="https://www.getrevue.co/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                &nbsp;Revue
                                    </a>
                                        </small>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

function ctaActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className={classNames('w-full', styles.self?.flexDirection === 'row' ? 'lg:w-auto' : null)}>
            <div className="overflow-x-hidden">
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', 'lg:flex-nowrap', styles.actions ? mapStyles(styles.actions) : null)}
                    data-sb-field-path=".actions"
                >
                    {/* {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                    ))} */}
                </div>
            </div>
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row', 'lg:justify-between'];
        case 'col':
            return ['flex-col'];
    }
    return null;
}
