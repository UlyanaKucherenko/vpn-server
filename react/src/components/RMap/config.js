import L from 'leaflet';
import HomeMarker from 'assets/img/map/icon-home.svg';
import OrderMarker from 'assets/img/map/icon-order.svg';
import CourierMarker from 'assets/img/map/icon-courier.svg';
import SelectedOrderMarker from 'assets/img/map/icon-selected-order.svg';
import SelectedCourierMarker from 'assets/img/map/icon-selected-courier.svg';

export const homeMarker = new L.Icon({
  iconUrl: HomeMarker,
  iconRetinaUrl: HomeMarker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(44, 44),
});

export const courierMarker = new L.Icon({
  iconUrl: CourierMarker,
  iconRetinaUrl: CourierMarker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(28, 36),
});

export const orderMarker = new L.Icon({
  iconUrl: OrderMarker,
  iconRetinaUrl: OrderMarker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(28, 36),
});

export const selectedCourierMarker = new L.Icon({
  iconUrl: SelectedCourierMarker,
  iconRetinaUrl: SelectedCourierMarker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(28, 36),
});

export const selectedOrderMarker = new L.Icon({
  iconUrl: SelectedOrderMarker,
  iconRetinaUrl: SelectedOrderMarker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(28, 36),
});

export const tooltipOffset = new L.Point(0, -15);
