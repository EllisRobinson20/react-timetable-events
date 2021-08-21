import { Moment } from "moment";
import PropTypes from "prop-types";
import * as React from "react";
export declare type ClassNames = {
    time_table_wrapper: string;
    day: string;
    day_title: string;
    hour: string;
    event: string;
    event_info: string;
};
export interface Event {
    id: number | string;
    name: string;
    startTime: Moment;
    endTime: Moment;
    type?: string;
    [key: string]: unknown;
}
export interface Events {
    [day: string]: Event[];
}
declare const DEFAULT_HOURS_INTERVAL: {
    from: number;
    to: number;
};
export declare const getDefaultDayLabel: (day: string) => string;
export interface HourPreviewProps {
    hour: string;
    defaultAttributes: React.HTMLAttributes<HTMLDivElement>;
    classNames?: ClassNames;
}
export declare const HourPreview: ({ hour, defaultAttributes }: HourPreviewProps) => JSX.Element;
export interface EventPreviewProps {
    event: Event;
    defaultAttributes: React.HTMLAttributes<HTMLDivElement>;
    classNames: ClassNames;
}
export declare const EventPreview: ({ event, defaultAttributes, classNames, }: EventPreviewProps) => JSX.Element;
export declare const EventsList: ({ events, day, hoursInterval, rowHeight, renderEvent, }: {
    day: string;
    events: Events;
    renderEvent: typeof EventPreview;
    hoursInterval: typeof DEFAULT_HOURS_INTERVAL;
    rowHeight: number;
}) => JSX.Element[];
export declare const HoursList: ({ hoursInterval, rowHeight, renderHour, }: {
    hoursInterval: typeof DEFAULT_HOURS_INTERVAL;
    rowHeight: number;
    renderHour: typeof HourPreview;
}) => JSX.Element[];
interface TimeTableProps {
    events: Events;
    hoursInterval?: typeof DEFAULT_HOURS_INTERVAL;
    timeLabel?: string;
    getDayLabel?: (day: string) => string;
    renderEvent?: typeof EventPreview;
    renderHour?: typeof HourPreview;
}
export declare const TimeTable: {
    ({ events, hoursInterval, timeLabel, getDayLabel, renderEvent, renderHour, }: TimeTableProps): JSX.Element;
    propTypes: {
        events: PropTypes.Validator<object>;
        hoursInterval: PropTypes.Requireable<PropTypes.InferProps<{
            from: PropTypes.Validator<number>;
            to: PropTypes.Validator<number>;
        }>>;
        renderHour: PropTypes.Requireable<(...args: any[]) => any>;
        renderEvent: PropTypes.Requireable<(...args: any[]) => any>;
        getDayLabel: PropTypes.Requireable<(...args: any[]) => any>;
        timeLabel: PropTypes.Requireable<string>;
    };
    defaultProps: {
        hoursInterval: {
            from: number;
            to: number;
        };
        timeLabel: string;
        renderHour: ({ hour, defaultAttributes }: HourPreviewProps) => JSX.Element;
        renderEvent: ({ event, defaultAttributes, classNames, }: EventPreviewProps) => JSX.Element;
        getDayLabel: (day: string) => string;
    };
};
export default TimeTable;
