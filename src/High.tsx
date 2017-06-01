import * as React from 'react'
import {Component, ComponentClass} from 'react'


export default function High<T>(InputTemplate: ComponentClass<T>): ComponentClass<T> {
    return class extends Component<T, void> {
        constructor(props: T) {
            super(props)
        }

        render() {
            
            const newProps:any = Object.assign({}, this.props, { theme: this.props['theme'] || 'basic'})

            return (
                <InputTemplate {...newProps} />
            );
        }
    }
}