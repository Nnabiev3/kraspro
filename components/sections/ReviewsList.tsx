"use client";
import { useState } from "react";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { site, isConfirmed } from "@/data/site";
export default function ReviewsList() {
  const [filter, setFilter] = useState("");
  if (!reviews.length) return <div className="mt-6"><p>Reviews coming soon. Have we worked on your home? Share your experience.</p><a className="mt-4 inline-block font-semibold text-teal underline" href={isConfirmed(site.reviewUrl) ? site.reviewUrl : "/contact"}>{isConfirmed(site.reviewUrl) ? "Leave us a review" : "Contact us to share feedback"}</a></div>;
  const filtered = reviews.filter(review => !filter || review.service === filter);
  return <div className="mt-6"><label htmlFor="review-service" className="font-semibold">Filter by service</label><select id="review-service" value={filter} onChange={event => setFilter(event.target.value)} className="ml-3 rounded border border-gray-600 bg-white p-2"><option value="">All services</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.navLabel}</option>)}</select><ul className="mt-6 grid gap-4">{filtered.map((review, index) => <li key={index} className="rounded-xl border border-gray-200 bg-white p-6"><p>{review.rating} out of 5 · {review.service} · <time dateTime={review.date}>{review.date}</time></p><blockquote className="my-3">{review.text}</blockquote><p className="font-semibold">{review.name}</p></li>)}</ul>{!filtered.length && <p className="mt-4">No reviews for this service yet.</p>}</div>;
}
