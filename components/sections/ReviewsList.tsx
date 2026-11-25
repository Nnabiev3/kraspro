"use client";
import { useState } from "react";
import type { Review } from "@/data/reviews";
import type { Service } from "@/data/services";
export default function ReviewsList({ reviews, services, emptyText, reviewUrl }: { reviews: Review[]; services: Pick<Service, "slug" | "navLabel">[]; emptyText: string; reviewUrl: string }) {
  const [filter, setFilter] = useState("");
  if (!reviews.length) return <div className="mt-6"><p>{emptyText}</p><a className="mt-4 inline-block font-semibold text-teal underline" href={reviewUrl || "/contact"}>{reviewUrl ? "Leave us a review" : "Contact us to share feedback"}</a></div>;
  const filtered = reviews.filter(review => !filter || review.service === filter);
  return <div className="mt-6"><label htmlFor="review-service" className="font-semibold">Filter by service</label><select id="review-service" value={filter} onChange={event => setFilter(event.target.value)} className="ml-3 rounded border border-gray-600 bg-white p-2"><option value="">All services</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.navLabel}</option>)}</select><ul className="mt-6 grid gap-4">{filtered.map((review, index) => <li key={index} className="rounded-xl border border-gray-200 bg-white p-6"><p>{review.rating} out of 5 � {services.find(service => service.slug === review.service)?.navLabel ?? review.service} � <time dateTime={review.date}>{review.date}</time></p><blockquote className="my-3">{review.text}</blockquote><p className="font-semibold">{review.name}</p></li>)}</ul>{!filtered.length && <p className="mt-4">No reviews for this service yet.</p>}</div>;
}
