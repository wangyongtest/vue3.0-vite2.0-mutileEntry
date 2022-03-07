
declare modules '*.vue' {
    import { defineComponent } from 'vue'
    const Component: defineComponent<{}, {}, any>
    export default Component
}