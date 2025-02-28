import type BaseEffectSource from "./base-effect-source.d.ts";
import type { BaseEffectSourceData } from "./base-effect-source.d.ts";
import type BaseLightSource from "./base-light-source.d.ts";
import type RenderedEffectSource from "./rendered-effect-source.d.ts";

/**
 * An abstract base class which defines a framework for effect sources which originate radially from a specific point.
 * This abstraction is used by the LightSource, VisionSource, SoundSource, and MovementSource subclasses.
 *
 * @example A standard PointSource lifecycle:
 * ```js
 * const source = new PointSource({object}); // Create the point source
 * source.initialize(data);                  // Configure the point source with new data
 * source.refresh();                         // Refresh the point source
 * source.destroy();                         // Destroy the point source
 * ```
 *
 * @param [options]
 * @param [options.object] Some other object which is responsible for this source
 */
export class PointEffectSource<
    TObject extends PlaceableObject | null = PlaceableObject | null,
> extends BaseEffectSource<TObject> {
    constructor(options?: { object?: TObject });

    /** The data of this source. */
    data: PointEffectSourceData;

    /** A convenience reference to the radius of the source. */
    get radius(): number;

    /** The polygonal shape of the point source, generated from its origin, radius, and other data. */
    shape: PointSourcePolygon | PIXI.Polygon;

    /** A collection of boolean flags which control rendering and refresh behavior for the source. */
    protected _flags: Record<string, boolean | number>;

    /* -------------------------------------------- */
    /*  Properties                                  */
    /* -------------------------------------------- */

    /**
     * Returns the update ID associated with this point source.
     * The update ID is increased whenever the source is initialized.
     */
    get updateId(): number;

    /**
     * Is this point source currently active?
     * Returns false if the source is disabled, temporarily suppressed, or not initialized.
     */
    get active(): boolean;

    /**
     * Is this source currently disabled?
     * Returns false if the source hasn't been initialized yet.
     */
    get disabled(): boolean;

    /* -------------------------------------------- */
    /*  Point Source Geometry Methods               */
    /* -------------------------------------------- */

    /**
     * Initialize and configure the PointSource using provided data.
     * @param data Provided data for configuration
     * @returns The configured source
     */
    initialize(
        data?: Partial<PointEffectSourceData>,
        options?: { reset?: boolean },
    ): this;

    protected _initializeSoftEdges(): void;

    /**
     * Subclass specific configuration steps. Occurs after data initialization and shape computation.
     * @param changes The fields of data which changed during initialization
     */
    protected _configure(changes?: object): void;

    /* -------------------------------------------- */
    /*  Point Source Refresh                        */
    /* -------------------------------------------- */

    /** Refresh the state and uniforms of the PointSource. */
    refresh(): void;

    /** Test whether this source should be active under current conditions? */
    protected _isActive(): boolean;

    /** Subclass-specific refresh steps. */
    protected _refresh(): void;

    /* -------------------------------------------- */
    /*  Point Source Destruction                    */
    /* -------------------------------------------- */

    /** Steps that must be performed when the base source is destroyed. */
    destroy(): void;

    /** Subclass specific destruction steps. */
    protected _destroy(): void;

    /* -------------------------------------------- */
    /*  Point Source Geometry Methods               */
    /* -------------------------------------------- */

    /** Configure the parameters of the polygon that is generated for this source. */
    protected _getPolygonConfiguration(): PointSourcePolygonConfig;

    /** Create the polygon shape for this source using configured data. */
    protected _createPolygon(): PointSourcePolygon;
}

export class PointRenderedEffectSource<
    TObject extends PlaceableObject | null = PlaceableObject | null,
> extends RenderedEffectSource<TObject> {
    constructor(options?: { object?: TObject });

    /** A convenience reference to the radius of the source. */
    get radius(): number;

    /** The polygonal shape of the point source, generated from its origin, radius, and other data. */
    shape: PointSourcePolygon | PIXI.Polygon;

    /** A collection of boolean flags which control rendering and refresh behavior for the source. */
    protected _flags: Record<string, boolean | number>;

    /* -------------------------------------------- */
    /*  Properties                                  */
    /* -------------------------------------------- */

    /**
     * Returns the update ID associated with this point source.
     * The update ID is increased whenever the source is initialized.
     */
    get updateId(): number;

    /**
     * Is this point source currently active?
     * Returns false if the source is disabled, temporarily suppressed, or not initialized.
     */
    get active(): boolean;

    /**
     * Is this source currently disabled?
     * Returns false if the source hasn't been initialized yet.
     */
    get disabled(): boolean;

    /* -------------------------------------------- */
    /*  Point Source Geometry Methods               */
    /* -------------------------------------------- */

    /**
     * Initialize and configure the PointSource using provided data.
     * @param data Provided data for configuration
     * @returns The configured source
     */
    initialize(
        data?: Partial<PointEffectSourceData>,
        options?: { reset?: boolean },
    ): this;

    /**
     * Subclass specific data initialization steps.
     * This method is responsible for populating the instance data object.
     * @param data Provided data for configuration
     */
    protected _initializeSoftEdges(data: Partial<PointEffectSourceData>): void;

    /**
     * Subclass specific configuration steps. Occurs after data initialization and shape computation.
     * @param changes The fields of data which changed during initialization
     */
    protected _configure(changes?: object): void;

    /* -------------------------------------------- */
    /*  Point Source Refresh                        */
    /* -------------------------------------------- */

    /** Refresh the state and uniforms of the PointSource. */
    refresh(): void;

    /** Test whether this source should be active under current conditions? */
    protected _isActive(): boolean;

    /** Subclass-specific refresh steps. */
    protected _refresh(): void;

    /* -------------------------------------------- */
    /*  Point Source Destruction                    */
    /* -------------------------------------------- */

    /** Steps that must be performed when the base source is destroyed. */
    destroy(): void;

    /** Subclass specific destruction steps. */
    protected _destroy(): void;

    /* -------------------------------------------- */
    /*  Point Source Geometry Methods               */
    /* -------------------------------------------- */

    /** Configure the parameters of the polygon that is generated for this source. */
    protected _getPolygonConfiguration(): PointSourcePolygonConfig;

    /** Create the polygon shape for this source using configured data. */
    protected _createPolygon(): PointSourcePolygon;
}

export class PointEffectLightSource<
    TObject extends AmbientLight | Token | null,
> extends BaseLightSource<TObject> {
    constructor(options?: { object?: TObject });

    /** A convenience reference to the radius of the source. */
    get radius(): number;

    /** The polygonal shape of the point source, generated from its origin, radius, and other data. */
    shape: PointSourcePolygon | PIXI.Polygon;

    /** A collection of boolean flags which control rendering and refresh behavior for the source. */
    protected _flags: Record<string, boolean | number>;

    /* -------------------------------------------- */
    /*  Properties                                  */
    /* -------------------------------------------- */

    /**
     * Returns the update ID associated with this point source.
     * The update ID is increased whenever the source is initialized.
     */
    get updateId(): number;

    /**
     * Is this point source currently active?
     * Returns false if the source is disabled, temporarily suppressed, or not initialized.
     */
    get active(): boolean;

    /**
     * Is this source currently disabled?
     * Returns false if the source hasn't been initialized yet.
     */
    get disabled(): boolean;

    /* -------------------------------------------- */
    /*  Point Source Geometry Methods               */
    /* -------------------------------------------- */

    /**
     * Initialize and configure the PointSource using provided data.
     * @param data Provided data for configuration
     * @returns The configured source
     */
    initialize(
        data?: Partial<PointEffectSourceData>,
        options?: { reset?: boolean },
    ): this;

    /**
     * Subclass specific data initialization steps.
     * This method is responsible for populating the instance data object.
     * @param data Provided data for configuration
     */
    protected _initializeSoftEdges(data: Partial<PointEffectSourceData>): void;

    /**
     * Subclass specific configuration steps. Occurs after data initialization and shape computation.
     * @param changes The fields of data which changed during initialization
     */
    protected _configure(changes?: object): void;

    /* -------------------------------------------- */
    /*  Point Source Refresh                        */
    /* -------------------------------------------- */

    /** Refresh the state and uniforms of the PointSource. */
    refresh(): void;

    /** Test whether this source should be active under current conditions? */
    protected _isActive(): boolean;

    /** Subclass-specific refresh steps. */
    protected _refresh(): void;

    /* -------------------------------------------- */
    /*  Point Source Destruction                    */
    /* -------------------------------------------- */

    /** Steps that must be performed when the base source is destroyed. */
    destroy(): void;

    /** Subclass specific destruction steps. */
    protected _destroy(): void;

    /* -------------------------------------------- */
    /*  Point Source Geometry Methods               */
    /* -------------------------------------------- */

    /** Configure the parameters of the polygon that is generated for this source. */
    protected _getPolygonConfiguration(): PointSourcePolygonConfig;

    /** Create the polygon shape for this source using configured data. */
    protected _createPolygon(): PointSourcePolygon;
}

declare type PointSourceType = "light" | "sight";

declare interface PointSourceAnimationConfiguration {
    /** The human-readable (localized) label for the animation */
    label?: string;
    /** The animation function that runs every frame */
    animation?: (...args: unknown[]) => void;
    /** A custom illumination shader used by this animation */
    illuminationShader?: PIXI.Shader;
    /** A custom coloration shader used by this animation */
    colorationShader?: PIXI.Shader;
    /** A custom background shader used by this animation */
    backgroundShader?: PIXI.Shader;
    /** The animation seed */
    seed?: number;
    /** The animation time */
    time?: number;
}

declare global {
    interface PointEffectSourceData extends BaseEffectSourceData {
        /** The radius of the source */
        radius: number;
        /** A secondary radius used for limited angles */
        externalRadius: number;
        /** The angle of rotation for this point source */
        rotation: number;
        /** The angle of emission for this point source */
        angle: number;
        /** Whether or not the source is constrained by walls */
        walls: boolean;
    }
}
