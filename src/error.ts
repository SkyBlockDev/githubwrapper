export class githubError extends Error {
	static notFound(thing: string, data: string) {
		return new this(`${thing.toUpperCase()} NOT FOUND "${data}"`);
	}
}
