/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as Hume from "./api";
import urlJoin from "url-join";
import * as serializers from "./serialization";
import * as errors from "./errors";

export declare namespace HumeClient {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class HumeClient {
    constructor(protected readonly _options: HumeClient.Options) {}

    /**
     * Sort and filter jobs.
     */
    public async listJobs(
        request: Hume.ListJobsRequest = {},
        requestOptions?: HumeClient.RequestOptions
    ): Promise<Hume.JobRequest[]> {
        const { limit, status, when, timestampMs, sortBy, direction } = request;
        const _queryParams: Record<string, string> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (status != null) {
            if (Array.isArray(status)) {
                for (const _item of status) {
                    _queryParams["status"] = _item;
                }
            } else {
                _queryParams["status"] = status;
            }
        }

        if (when != null) {
            _queryParams["when"] = when;
        }

        if (timestampMs != null) {
            _queryParams["timestamp_ms"] = timestampMs.toString();
        }

        if (sortBy != null) {
            _queryParams["sort_by"] = sortBy;
        }

        if (direction != null) {
            _queryParams["direction"] = direction;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Default,
                "v0/batch/jobs"
            ),
            method: "GET",
            headers: {
                "X-Hume-Api-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/hume",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs:
                requestOptions?.timeoutInSeconds != null
                    ? requestOptions.timeoutInSeconds * 1000
                    : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.listJobs.Response.parseOrThrow(
                _response.body,
                {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Start a new batch job.
     */
    public async submitJob(
        request: Hume.BaseRequest = {},
        requestOptions?: HumeClient.RequestOptions
    ): Promise<Hume.JobId> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Default,
                "v0/batch/jobs"
            ),
            method: "POST",
            headers: {
                "X-Hume-Api-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/hume",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            body: await serializers.BaseRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs:
                requestOptions?.timeoutInSeconds != null
                    ? requestOptions.timeoutInSeconds * 1000
                    : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.JobId.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the JSON predictions of a completed job.
     */
    public async getJobPredictions(
        id: string,
        requestOptions?: HumeClient.RequestOptions
    ): Promise<Hume.SourceResult[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Default,
                `v0/batch/jobs/${id}/predictions`
            ),
            method: "GET",
            headers: {
                "X-Hume-Api-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/hume",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            timeoutMs:
                requestOptions?.timeoutInSeconds != null
                    ? requestOptions.timeoutInSeconds * 1000
                    : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.getJobPredictions.Response.parseOrThrow(
                _response.body,
                {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the artifacts ZIP of a completed job.
     */
    public async getJobArtifacts(
        id: string,
        requestOptions?: HumeClient.RequestOptions
    ): Promise<Blob> {
        const _response = await core.fetcher<Blob>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Default,
                `v0/batch/jobs/${id}/artifacts`
            ),
            method: "GET",
            headers: {
                "X-Hume-Api-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/hume",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            responseType: "blob",
            timeoutMs:
                requestOptions?.timeoutInSeconds != null
                    ? requestOptions.timeoutInSeconds * 1000
                    : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the request details and state of a given job.
     */
    public async getJobDetails(
        id: string,
        requestOptions?: HumeClient.RequestOptions
    ): Promise<Hume.JobRequest> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Default,
                `v0/batch/jobs/${id}`
            ),
            method: "GET",
            headers: {
                "X-Hume-Api-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/hume",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            timeoutMs:
                requestOptions?.timeoutInSeconds != null
                    ? requestOptions.timeoutInSeconds * 1000
                    : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.JobRequest.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
