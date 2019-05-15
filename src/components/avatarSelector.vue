<template>
    <div class="imageGallery"
         :class="{
            end: offset > max_offset,
            start: offset < 0
         }"
         @pointermove="scrollHandler"
         @pointerup="endScrollHandler"
         @pointerleave="endScrollHandler"
         @pointer="endScrollHandler"
         @touchmove="scrollHandler"
         @touchend="endScrollHandler"
         @touchstart="handletouchstart"
         @wheel="wheelHandler"
         @dragstart.prevent=""
         @drag.prevent=""
         ref="imageGallery"
    >
        <div :style="`transform: translateX(${-offset}px)`" class="slides-container" ref="gallery">
            <img :src="slide" class="slide" draggable="true" v-for="slide in slides"/>
        </div>
    </div>
</template>

<script>
    import {Animate, Easing} from "../TimeKit";
    import perso1 from "../assets/images/perso1.png"
    import perso2 from "../assets/images/perso2.png"
    import perso3 from "../assets/images/perso3.png"
    import perso4 from "../assets/images/perso4.png"
    import perso5 from "../assets/images/perso5.png"
    import perso6 from "../assets/images/perso6.png"

    function nearest_number(arr, number) {
        return arr.reduce((prev, curr) => {
            return (Math.abs(curr - number) < Math.abs(prev - number) ? curr : prev);
        });
    }

    export default {
        name: 'avatarSelector',
        data() {
            return {
                slides: [
                    perso1,
                    perso2,
                    perso3,
                    perso4,
                    perso5,
                    perso6,
                ],
                offset: 0,
                firstPosX: 0,
                max_offset: 0,
                steps: [],
                lock: false
            }
        },
        mounted() {
            let image_loaded = 0;
            const gallery_ref = this.$refs.gallery;
            gallery_ref.childNodes.forEach(c => c.addEventListener("load", () => {
                image_loaded++;
                if(image_loaded === gallery_ref.childNodes.length) {
                    this.steps = Array.from(gallery_ref.childNodes)
                        .map(c => {
                            const bounds = c.getBoundingClientRect();
                            return bounds.x
                        });
                }
            }));

            window.addEventListener("resize", () => {
                this.steps = Array.from(gallery_ref.childNodes)
                    .map(c => {
                        const bounds = c.getBoundingClientRect();
                        return bounds.x
                    });
            })
        },
        methods: {
            handletouchstart(e) {
                this.firstPosX = e.touches[0].clientX;
            },
            wheelHandler(e) {
                this.scrollHandler(e);
                clearTimeout(this.wheeling);
                this.wheeling = setTimeout(() => {
                    this.wheeling = undefined;
                    this.endScrollHandler();
                }, 150);
            },
            scrollHandler(e) {
                this.max_offset = this.$refs.gallery.getBoundingClientRect().width -
                    this.$refs.imageGallery.getBoundingClientRect().width;
                let dx = e.deltaX;
                if (e.buttons && e.buttons === 1) {
                    dx = -e.movementX;
                }
                if (e.touches) {
                    dx = this.firstPosX - e.touches[0].clientX;
                    this.firstPosX = e.touches[0].clientX;
                }
                if(Math.abs(dx) > 5 && !this.lock) {
                    this.lock = true;
                }
                this.lock && e.preventDefault();
                if (Math.abs(dx) >= 2) {
                    this.offset = Math.min((this.offset + dx));
                }
            },
            endScrollHandler() {
                this.lock = false;
                const new_offset = Math.max(0, Math.min(nearest_number(this.steps, this.offset), this.max_offset));
                const animation = Animate(this.offset, new_offset, Easing.easeInOutQuad, 0.05);
                this.$emit('persoSelect', this.slides[this.steps.indexOf(new_offset)]);
                animation.start();
                let raf = null;
                const loop = (t) => {
                    this.offset = animation.tick();
                    if (animation.is_ended_signal) {
                        cancelAnimationFrame(raf);
                        return;
                    }
                    raf = requestAnimationFrame(loop.bind({}, t + 1));
                };
                loop(0);

            }
        }
    }
</script>

<style lang="scss" scoped>
    $first-brake: 1366px;
    $second-brake: 1016px;
    $blue: #1a68ff;

    .imageGallery {
        z-index: 10;
        user-select: none;
        position: relative;
        overflow: hidden;
        background: white;

        &::after, &::before {
            content: "";
            position: absolute;
            top: 0;
            height: 100%;
            width: 0;
            background: transparent;
            transition: width 1000ms, background-color 1000ms;
            border-radius: 50%;
            z-index: 2;
        }

        &::after {
            right: -5vw;
        }

        &::before {
            left: calc(-5vw - 10px);
        }

        &.end::after, &.start::before {
            height: 100%;
            width: 10vw;
            background: transparentize($blue, 0.7);
            transition: width 150ms, background-color 150ms;
        }

        .slides-container {
            display: grid;
            grid-template-columns: repeat(6, 100vw);
            height: 100%;
            width: max-content;
            z-index: 1;
            .slide {
                width: 100%;
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                box-sizing: border-box;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }
        }
    }
</style>
